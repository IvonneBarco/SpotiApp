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

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBxOOTQnG_6bKv_8UFiL57xaXNOquhOjtwb7wVh6cYxP0QT3mY8EYXvxpgvlmvaSvRatV02CIwESyjOSJo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers
    });
  }
  getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBxOOTQnG_6bKv_8UFiL57xaXNOquhOjtwb7wVh6cYxP0QT3mY8EYXvxpgvlmvaSvRatV02CIwESyjOSJo'
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${{termino}}&type=artist`,
      { headers }
    );
  }
}
