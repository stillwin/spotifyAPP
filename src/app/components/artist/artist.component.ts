import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  topTracks: any [] = [];
  constructor(private activatedRoute:ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map(params => params['id']).
    subscribe(id => {
      console.log(id);
      this._spotify.getArtista(id).subscribe(artista => {
          console.log(artista);
        this.artista=artista;
      });
      this._spotify.getTopTrack(id)
      .map((resp:any) => resp.tracks )
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      })
    })
  }

}
