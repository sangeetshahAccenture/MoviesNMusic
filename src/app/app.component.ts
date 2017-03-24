import {Component} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import {UserInfo} from 'app/shared/user-info';
import {Observable} from "rxjs";
import {Visitor} from "app/shared/analytics.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private authService: AuthService) {
        console.log("AppComponent Loaded");
        Visitor.pageview("AppComponent").send();
        
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
