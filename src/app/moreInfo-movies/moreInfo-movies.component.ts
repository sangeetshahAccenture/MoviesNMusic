import { Component } from '@angular/core';
import { Movies } from "app/model/movies";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-moreInfo-movies',
    templateUrl: './moreInfo-movies.component.html',
    styleUrls: ['./moreInfo-movies.component.css']
})

export class MoreInfoMoviesComponent {

    _movie: any;
    _bg_path: string;
    _poster: string;

    public constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getMovieResult();
        this._bg_path = "http://image.tmdb.org/t/p/w1280" + this._movie.backdrop_path;
        this._poster = "http://image.tmdb.org/t/p/w300" +  this._movie.poster_path;

        console.log(this._movie);
    }

    getMovieResult() {

        this._movie = JSON.parse(localStorage.getItem('movieResult'));
        
         
    }

}