import {Component} from "@angular/core";
import {InformacionService} from "./services/informacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _is: InformacionService ) { /*_is es la abreviatura de informacion service*/

  }
}
