import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {authConfig, firebaseConfig} from "environments/firebaseConfig";
import {AngularFireModule} from "angularfire2";
import {AuthService} from "app/shared/auth.service";
import {LoginUserComponent} from "app/login-user/login-user.component";
import {DisplayUserComponent} from "app/display-user/display-user.component";
import {RegisterUserComponent} from "app/register-user/register-user.component";
import {AlertModule} from "ng2-bootstrap";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {MoviesListComponent} from "app/display-movies/display-movies.component";
import {MusicListComponent} from "app/display-music/display-music.component";
import {LandingPageComponent} from "app/landing-page/landing-page.component";
import {SearchPageComponent} from "app/search-page/search-page.component";
import {RouterModule} from '@angular/router';
import {MoreInfoMoviesComponent} from 'app/moreInfo-movies/moreInfo-movies.component';

@NgModule({
    declarations: [
        AppComponent,
        DisplayUserComponent,
        LoginUserComponent,
        RegisterUserComponent,
        ResetPasswordComponent,
        MoviesListComponent,
        MusicListComponent,
        LandingPageComponent,
        SearchPageComponent,
        MoreInfoMoviesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AlertModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, authConfig),
        RouterModule.forRoot([
            {
                path: '',
                component: LandingPageComponent
            },
            {
                path: 'search',
                component: SearchPageComponent
            },
            {
                path: 'signup',
                component: RegisterUserComponent
            },
            {
                path: 'login',
                component: LoginUserComponent
            },
            {
                path: 'resetpw',
                component: ResetPasswordComponent
            },
            {
                path: 'moreInfoMovies',
                component: MoreInfoMoviesComponent
            }
            ])
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
