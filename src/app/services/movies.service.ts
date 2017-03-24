import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Movies } from 'app/model/movies';

@Injectable()
export class MoviesService {

  //APIs
  private search_url = 'https://api.themoviedb.org/3/search/movie?';
  private more_info_url = "https://api.themoviedb.org/3/movie/";
  private api_key = "api_key=2cf564d5ffd8372c4d36e69d26917103";
  private popular_movies_url = 'https://api.themoviedb.org/3/discover/movie?api_key=2cf564d5ffd8372c4d36e69d26917103&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  constructor(private http: Http) { }

//Fetches Popular movies from API
  getTopRated(): Observable<Movies[]> {
    return this.http.get(this.popular_movies_url)
      .map(this.extractData)
      //.do(data => console.log("Popular Movies Results from API: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

 //Fetches movies by passing (string param) name
  getMovies(name: string): Observable<Movies[]> {

    name = name.trim().replace(' ','%20');// I don't know how to do this in a different way :(
    let query_url = this.search_url + this.api_key + '&query=' + name + '&page=1&include_adult=false';

    return this.http.get(query_url)
      .map(this.extractData)
      //.do(data => console.log("Search Results from API - : " + JSON.stringify(data)))
      .catch(this.handleError);
  }


  getMoreInfo(movieId: string):Observable<any>{

   
     let query_url = this.more_info_url + movieId + "?" + this.api_key + "&language=en-US";
    console.log(query_url);

    return this.http.get(query_url)
      .map((res:Response) => res.json())
      .do(data => localStorage.setItem("getMoreInfo",JSON.stringify(data)))
      .catch(this.handleError);  
  }

  getMovieTrailers(movieId: string):Observable<any>{

    let query_url = this.more_info_url + movieId + "/videos?" + this.api_key + "&language=en-US";
    console.log(query_url);

  

    return this.http.get(query_url)
      .map((res:Response) => res.json())
      .do(data => localStorage.setItem("trailers",JSON.stringify(data)))
      //.do(data => console.log("Video Results from API - : " + JSON.stringify(data)))
      .catch(this.handleError);  
  }

  private extractData(res: Response) {
    let body = res.json();
    let results = body.results.filter((item) => item.poster_path !== null);
    return results || {};
  }
  

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}