import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any [];

  urlSpotify: string = 'https://api.spotify.com/v1/';
  queryTopTrack: string = '/top-tracks?country=ES';
  tokenSpotify: "BQAeutRbsga2bGb1qV4dUqZFAdUmRLcRcCB2RbeJe__XqtcCJlIP-C2uSudapFd-6yRQ3XKh-rSemN3T3x8";

  constructor(public http:HttpClient) {
  console.log('Servicio spotify listo'); }




  getArtistas(termino:string){
  let url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;
  let headers = new HttpHeaders ({
    'Authorization' : 'Bearer BQAeutRbsga2bGb1qV4dUqZFAdUmRLcRcCB2RbeJe__XqtcCJlIP-C2uSudapFd-6yRQ3XKh-rSemN3T3x8'
  })

  return this.http.get(url,{headers}).map( (resp:any) => {
    this.artistas = resp.artists.items;
    return   this.artistas;
  })
}

  private getHeaders() : HttpHeaders{
    let headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQAeutRbsga2bGb1qV4dUqZFAdUmRLcRcCB2RbeJe__XqtcCJlIP-C2uSudapFd-6yRQ3XKh-rSemN3T3x8'
    });
    return headers;
  }

  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();

    return this.http.get(url,{headers});
  }

  getTopTrack(id:string){
    let url = `${this.urlSpotify}artists/${id}${this.queryTopTrack}`;
    let headers = this.getHeaders();

    return this.http.get(url,{headers});
  }
}
