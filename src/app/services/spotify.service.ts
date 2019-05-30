import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  list: any[] = [];
  token: any =
    "BQDBzfo6lIPc75YI7TDH8-LmCwQcf6G6M2H24HDW4Y6f1swqO3h7DsMFtKuUFq9TpEAG0uQxmPy5HpPeO3A";

  constructor(private http: HttpClient) {
    console.log("Spotify services ready");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.token + ""
    });

    return this.http
      .get("https://api.spotify.com/v1/browse/new-releases", {
        headers
      })
      .pipe(
        map(data => {
          return data["albums"].items;
        })
      );
  }
  getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.token + ""
    });

    return this.http
      .get(`https://api.spotify.com/v1/search?q=${{ termino }}&type=artist`, {
        headers
      })
      .pipe(map(data => data["artists"].items));
  }
}
