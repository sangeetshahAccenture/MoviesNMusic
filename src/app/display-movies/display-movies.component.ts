import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/shared/auth.service";
import { UserInfo } from "app/shared/user-info";
import { Observable } from "rxjs";
import { Movies } from "app/model/movies";
import { MoviesService } from "app/services/movies.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Router, NavigationExtras} from "@angular/router";
import * as firebase from "firebase";


@Component({
  selector: 'display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css'],
  providers: [MoviesService]
})

export class MoviesListComponent implements OnInit {

  errorMessage: string;
  movies: Movies[];
  searchedMovieResults: Observable<Movies[]>;
  desc:string;
    searchHistory: string[];

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {

    //Load the popular movies on first
    this.getTopRated();
      this.searchHistory = ['No search history'];

  }

  //get the popular movies from the movie service
  getTopRated() {
    this.desc = "Popular";
    this.moviesService.getTopRated()
      .subscribe(
      data => this.movies = data,
      error => this.errorMessage = <any>error);
  }

  //Search for a film by name
  //usees getMovies function from Movies Service
  search(name: string) {
    console.log(name);
    this.desc = "results";
    this.moviesService.getMovies(name)
      .subscribe(
      data => this.movies = data,
      error => this.errorMessage = <any>error);

    //dafault back to the top rated if the search bar is empty
    if (name === '') {
      this.getTopRated();
    }

  }

    moreInfoClicked(movie: Movies) {
        //console.log("moreInfoClicked :-"+JSON.stringify(movie));
        //debugger;
         let navigationExtras: NavigationExtras = {
            queryParams: {
                "movie": JSON.stringify(movie),
            }
        };
        
        localStorage.setItem('movieResult', JSON.stringify(movie));
        this.router.navigate(['moreInfoMovies']);
    }
    

}
