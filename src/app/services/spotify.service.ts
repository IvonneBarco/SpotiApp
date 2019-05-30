import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  list: any[] = [];

  constructor(private http: HttpClient) { 
    console.log('Spotify services ready');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCz9Z-z-tXfnoVLpmLZBwQh6biLL3W_VHuiThNpV77rH8916RA-_1ZAgS2EVgBmGFnCtNE0T37L-7KHYZ8'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .subscribe(data =>{
      console.log(data);
    });
  }
}
