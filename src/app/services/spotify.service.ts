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
      Authorization: 'Bearer BQAAvOLEseXzjusc8fSmPLCgoE9nnDWT1TjTAM_TfI1QBZOyD46lRbt7Q4devHdb4wQQL4AJKntFCeevXo0'
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


}