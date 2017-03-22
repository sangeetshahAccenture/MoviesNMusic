import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/shared/auth.service";
import { UserInfo } from "app/shared/user-info";
import { Observable } from "rxjs";
import { Music } from "app/model/music";
import { MusicService } from "app/services/music.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css'],
  providers: [MusicService]
})

export class MusicListComponent implements OnInit {

  errorMessage: string;
  musics: Music[];
  searchedMovieResults: Observable<Music[]>;
  mode = 'Observable';

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {

  }


  search(name: string) {

   
    }


}
