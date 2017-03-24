import { Component, OnInit } from '@angular/core';
import { Movies } from "app/model/movies";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "app/services/movies.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Component({
    selector: 'app-moreInfo-movies',
    templateUrl: './moreInfo-movies.component.html',
    styleUrls: ['./moreInfo-movies.component.css'],
    providers: [MoviesService]
})

export class MoreInfoMoviesComponent {

    _movie: any;
    _moreInfoResults: any;
    _bg_path: string;
    _poster: string;
    errorMessage: string;

    public constructor(private route: ActivatedRoute, private moviesService: MoviesService ) {

    }

    ngOnInit() {
        this.getMovieResult();
        this.getMovieInfo();
        
        this._moreInfoResults = JSON.parse(localStorage.getItem('getMoreInfo'));
        console.log(this._moreInfoResults);
        window.scrollTo(0,0);

        this._bg_path = "";  
        this._poster = "http://image.tmdb.org/t/p/w300" +  this._movie.poster_path;
        //this._bg_path = "http://image.tmdb.org/t/p/w1280" + this._movie.backdrop_path;
        //this._bg_path = "http://www.homedepot.com/catalog/productImages/1000/23/23da0e99-bebd-4a7a-9c31-76151987b65a_1000.jpg";
    
        var database = firebase.database();
        if(firebase.auth().currentUser)
         firebase.database().ref( firebase.auth().currentUser.uid+"Movies").push(this._movie.title);

}

    getMovieResult() {

        this._movie = JSON.parse(localStorage.getItem('movieResult')); 
            
    }

    getMovieInfo() {
       this.moviesService.getMoreInfo(this._movie.id)
       .subscribe(
       data => this._moreInfoResults = data,
       error => this.errorMessage = <any>error);

    }

}