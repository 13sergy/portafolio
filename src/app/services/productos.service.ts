import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {} from "@angular/log";


@Injectable()
export class ProductosService {

  prodctos: any[] = [];
  cargando_productos: boolean = true;

  constructor(private http: Http) {
    this.cargar_productos();
  }


  public cargar_productos() {
    this.cargando_productos = true;
    this.http.get('https://portafolio-d76f7.firebaseio.com/productos_idx.json')
      .subscribe(data => {
        console.log(data.json());
        this.productos = data.json();
        this.cargando_productos = false;
      });
  }

}
