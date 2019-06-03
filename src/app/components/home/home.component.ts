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
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotity: SpotifyService) {
    /*this.http.get("https://restcountries.eu/rest/v2/lang/es")
      .subscribe((result: any) => {
        this.paises = result;
        console.log(result);
      });*/
    
    this.loading = true;
    this.error = false;

    this.spotity.getNewReleases()
      .subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    },(errorServicio) => {
      this.error = true;
      this.mensajeError = errorServicio.error.error.message
      console.log(errorServicio);
      
    });
  }
}
