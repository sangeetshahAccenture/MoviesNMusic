import {Component, Output, EventEmitter} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "app/shared/auth.service";
import {FormBuilder, Validators, AbstractControl, FormGroup} from "@angular/forms";
import {Router} from '@angular/router';
import {Visitor} from "app/shared/analytics.service";
@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.css']
})


export class LoginUserComponent {
    form: FormGroup;
    email: AbstractControl;
    password: AbstractControl;

    constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
        this.form = fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
         console.log("LoginUserComponent Loaded");
        Visitor.pageview("LoginUserComponent").send();
    }

    login(value: any) {
        if (this.form.valid) {
            this.authService.login(this.email.value, this.password.value);
            Visitor.event("Button Press", "Login with Login Button" ).send();
            this.form.reset();
        }
    }

    loginVia(provider: string) {
        this.authService.loginViaProvider(provider);
        Visitor.event("Button Press", "Login with " + provider).send();
    }
    
    registerClicked() {
        this.router.navigate(['signup']);
        Visitor.event("Button Press", "signup").send();
    }

    

}