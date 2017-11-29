import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando_productos: boolean = true;

  constructor(private http: Http) {
    this.cargar_productos();
  }


  public cargar_productos() {
    this.cargando_productos = true;
    this.http.get('https://portafolio-d76f7.firebaseio.com/productos_idx.json')
      .subscribe(data => {
        // console.log(data.json());
        setTimeout(() => {
          this.productos = data.json();
          this.cargando_productos = false;
        }, 1500);
      });
  }

  public cargar_producto(cod: string) {
    return this.http.get('https://portafolio-d76f7.firebaseio.com/productos/' + cod + '.json');
  }

}
