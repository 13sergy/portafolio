import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class InformacionService {

  info: any = {};
  equipo: any[] = [];
  cargada: boolean = false;
  cargada_sobre_nosotros: boolean = false;

  constructor(public http: Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info() {
    this.http.get('assets/data/info.pagina.json')
      .subscribe(data => {
        this.info = data.json();
        this.cargada = true;
      });
  }

  public carga_sobre_nosotros() {
    this.http.get('https://portafolio-d76f7.firebaseio.com/equipo.json')
      .subscribe(data => {
        // console.log(data.json());
        this.equipo = data.json();
        this.cargada_sobre_nosotros = true;
      });
  }

}
