import {Component, OnInit} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import {UserInfo} from "app/shared/user-info";
import {Observable} from "rxjs";
import {Router} from '@angular/router';

@Component({
    selector: 'app-display-user',
    templateUrl: './display-user.component.html',
    styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent {

    constructor(private authService: AuthService, private router: Router) {}

    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    }
    
    resetClicked() {
        this.router.navigate(['resetpw']);
    }
    
    changeName(value: any) {
        console.log(value);
    }
}
