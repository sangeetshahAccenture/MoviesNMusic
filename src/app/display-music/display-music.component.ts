import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/shared/auth.service";
import { UserInfo } from "app/shared/user-info";
import { Observable } from "rxjs";
import { LastFM } from "app/services/lastfm.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css'],
  providers: [LastFM,
    {
      provide: 'LastFMConfig',
      useValue: {
        apiKey: '4a0c0aad4b3d017f5cd60539b9cd9a25'
      }
    }]
})

export class MusicListComponent implements OnInit {

  errorMessage: string;
  results: any[];
  isTopTracks: boolean;
  desc: string;

  constructor(private _lastFM: LastFM) { }

  ngOnInit(): void {
    this.getTopTracks();
  }


  searchTrack(term: string) {
    this.isTopTracks = false;
    this.desc = "Results:"

    this._lastFM.Track.search(term)
      .subscribe(
      data => this.results = data,
      error => this.errorMessage = <any>error);

    if (term === '') {
      this.getTopTracks();
    }
  }

  getTopTracks() {
    this.isTopTracks = true;
    this.desc = "Top Tracks";

    this._lastFM.Charts.getTopTracks()
      .subscribe(
      data => this.results = data,
      error => this.errorMessage = <any>error);
  }


}
