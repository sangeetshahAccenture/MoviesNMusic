import {Component} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import {UserInfo} from 'app/shared/user-info';
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private authService: AuthService) {
    }

    isLoggedIn(): Observable<boolean> {
        return this.authService.isLoggedIn();
    }
    
    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    }
    
    logout() {
        this.authService.logout();
    }
}
