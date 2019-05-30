import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  list: any[] = [];
  token: any =
    'BQB6rq9A1JxvTtlW5lpGuyyRaxEh1uoEG-LF9kp-DphcZW-om4eZF3Th91KgIN9MSqqzTYIOXSilTCrFWak';

  constructor(private http: HttpClient) {
    console.log('Spotify services ready');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token + ''
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
  getArtist(termino: string) {
    return this.getQuery(`search?q=${{ termino }}&type=artist`)
    .pipe(map(data => data['artists'].items));
  }
}
