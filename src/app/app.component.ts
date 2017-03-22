import {Component} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Movies N Music';
    showRegisterForm: boolean = false;
    showPWReset: boolean = false;
    showLogIn: boolean = true;

    constructor(private authService: AuthService) {
    }

    isLoggedIn(): Observable<boolean> {
        return this.authService.isLoggedIn();
    }
    
    showLogInForm(value:boolean):void {
        this.showRegisterForm = false;
        this.showPWReset = false;
        this.showLogIn = true;
    }
    
    altBtnClicked(value:string):void {
        if (value == "register") {
            this.showRegisterForm = true;
            this.showPWReset = false;
            this.showLogIn = false;
        }
        else if (value == "resetPW") {
            this.showRegisterForm = false;
            this.showPWReset = true;
            this.showLogIn = false;
        }
    }
}
