import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  list: any[] = [];
  
  constructor(private http: HttpClient) {
    console.log('Spotify services ready');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDsEuVO2Th1HN5YugFYRwiTcfIK_OGtwy8m_xi1Dy9dTgwIHPKr3qe-qod7JlBTTHPGTpUV4Zq-9tMLR_0'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
    .pipe(map(data => {
        return data['albums'].items;
      })
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist`)    
    .pipe(map(data => {
      return data['artists'].items;      
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
    .pipe(map(data => {
      return data['tracks'];      
      }));
  }


}