import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class ProductosService {

  productos: any[] = [];
  productos_filtrado: any[] = [];
  cargando_productos = true;

  constructor(private http: Http) {
    this.cargar_productos();
  }


  public cargar_productos() {
    this.cargando_productos = true;

    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://portafolio-d76f7.firebaseio.com/productos_idx.json')
        .subscribe(data => {
          // console.log(data.json());
          setTimeout(() => {
            this.productos = data.json();
            this.cargando_productos = false;
            resolve();
          }, 1500);
        });
    });

    return promesa;

  }

  public cargar_producto(cod: string) {
    return this.http.get('https://portafolio-d76f7.firebaseio.com/productos/' + cod + '.json');
  }

  public buscar_producto(termino: string) {

    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        // Termino la carga de productos
        this.filtrar_productos(termino);
      });
    } else {
      this.filtrar_productos(termino);
    }

  }

  private filtrar_productos(termino: string) {
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrado.push(prod);
      }
    });
  }

}
