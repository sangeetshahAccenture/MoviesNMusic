import {Component, OnInit} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import {UserInfo} from "app/shared/user-info";
import {Observable} from "rxjs";
import {Router} from '@angular/router';
import {Visitor} from "app/shared/analytics.service";
import * as firebase from "firebase";

@Component({
    selector: 'app-display-user',
    templateUrl: './display-user.component.html',
    styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent {

    constructor(private authService: AuthService, private router: Router) {
        console.log("DisplayUserComponent Loaded");
        Visitor.pageview("DisplayUserComponent").send();
    }

    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    }
    
    resetClicked() {
        this.router.navigate(['resetpw']);
    }
    
    changeName(value: any) {
        console.log(value);
 
    //     var database = firebase.database();
    //     firebase.database().ref( firebase.auth().currentUser.uid).push(value);

 

    //     var starCountRef = firebase.database().ref(firebase.auth().currentUser.uid);
    //     starCountRef.on('value', function(snapshot) {
    //           console.log(snapshot.val());
    //     });

    //   var commentsRef = firebase.database().ref(firebase.auth().currentUser.uid);
    //     commentsRef.on('child_added', function(data) {
    //      console.log(data.val());
    //     });
    if(!value)
        return;
    var user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: value,
    photoURL: user.photoURL
});
    }
}
