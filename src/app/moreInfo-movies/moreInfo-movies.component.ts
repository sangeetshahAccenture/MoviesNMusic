import { Component, OnInit } from '@angular/core';
import { Movies } from "app/model/movies";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "app/services/movies.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-moreInfo-movies',
    templateUrl: './moreInfo-movies.component.html',
    styleUrls: ['./moreInfo-movies.component.css'],
    providers: [MoviesService]
})

export class MoreInfoMoviesComponent {

    _movie: any;
    _moreInfoResults: any;
    _trailers: any;
    _videodata: any;
    _bg_path: string;
    _poster: string;
    errorMessage: string;
    name: string;
    video: any;
    baseUrl: string = 'https://www.youtube.com/embed/';
    url: any;
    hasTrailer: boolean;


    public constructor(private route: ActivatedRoute, private moviesService: MoviesService, private sanitizer: DomSanitizer) {

    }

    ngOnInit() {

        this.hasTrailer = false;

        this.getMovieResult();
        this.getMovieInfo();
        this.getMovieTrailers();

        this._moreInfoResults = JSON.parse(localStorage.getItem('getMoreInfo'));
        //this.video = { id: this._trailers.results[0].key };
        //console.log( "Key"+this._videodata.results[0].key);
        //this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this._videodata.results[0].key);

        this._bg_path = "";  
        this._poster = "http://image.tmdb.org/t/p/w300" +  this._movie.poster_path;
        //this._bg_path = "http://image.tmdb.org/t/p/w1280" + this._movie.backdrop_path;
        //this._bg_path = "http://www.homedepot.com/catalog/productImages/1000/23/23da0e99-bebd-4a7a-9c31-76151987b65a_1000.jpg";
    }

    getMovieResult() {
        this._movie = JSON.parse(localStorage.getItem('movieResult'));
    }

    //
    getMovieInfo() {

        this.moviesService.getMoreInfo(this._movie.id)
            .subscribe(
            data => this._moreInfoResults = data,
            error => this.errorMessage = <any>error);

    }

    //Get all trailers movies from the music services
    getMovieTrailers() {

        this.moviesService.getMovieTrailers(this._movie.id)
            .subscribe(
            res => {
                this._videodata = res;
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this._videodata.results[0].key);
                console.log("Video Data : " + JSON.stringify(this._videodata));
            },
            error => this.errorMessage = <any>error);


    }

}