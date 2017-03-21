import {Component, Output, EventEmitter} from "@angular/core";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "app/shared/auth.service";

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
    form: FormGroup;
    email: AbstractControl;
    @Output() backBtnClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private authService: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            'email': ['', Validators.required]
        });
        this.email = this.form.controls['email'];
    }

    reset(value: any) {
        if (this.form.valid) {
            this.authService.sendPasswordResetEmail(this.email.value);
            this.form.reset();
        }
    }
    
    backToLogIn() {
        this.backBtnClicked.emit(true);
    }
}
