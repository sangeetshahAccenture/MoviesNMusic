import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/shared/auth.service";
import { UserInfo } from "app/shared/user-info";
import { Observable } from "rxjs";
import { Movies } from "app/model/movies";
import { MoviesService } from "app/services/movies.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';


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
  mode = 'Observable';

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {

    //Load the popular movies on first
    this.getTopRated();

  }

  //get the popular movies from the movie service
  getTopRated() {
    
    this.moviesService.getTopRated()
      .subscribe(
      data => this.movies = data,
      error => this.errorMessage = <any>error);
  }

  //Search for a film by name
  //usees getMovies function from Movies Service
  search(name: string) {

    this.moviesService.getMovies(name)
      .subscribe(
      data => this.movies = data,
      error => this.errorMessage = <any>error);

    //dafault back to the top rated if the search bar is empty
    if (name === '') {
      this.getTopRated();
    }

  }

    moreInfoClicked() {
        this.router.navigate(['moreInfoMovies']);
    }

}
