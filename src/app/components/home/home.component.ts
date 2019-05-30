import { Component } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  paises: any[] = [];
  nuevasCanciones: any[] = [];

  constructor(private spotity: SpotifyService) {
    /*this.http.get("https://restcountries.eu/rest/v2/lang/es")
      .subscribe((result: any) => {
        this.paises = result;
        console.log(result);
      });*/

    this.spotity.getNewReleases()
      .subscribe((data: any) => {
      //console.log(data);
      this.nuevasCanciones = data;
    });
  }
}
