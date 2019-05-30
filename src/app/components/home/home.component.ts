import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  paises: any[] = [];

  constructor(private http: HttpClient, private spotity: SpotifyService) {
    /*this.http.get("https://restcountries.eu/rest/v2/lang/es")
      .subscribe((result: any) => {
        this.paises = result;
        console.log(result);
      });*/

    spotity.getNewReleases();
  }
}
