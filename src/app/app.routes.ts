import {RouterModule, Routes} from "@angular/router";

import {AboutComponent, PortafolioComponent, ProductoComponent, SearchComponent} from "./components/index.paginas";

const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const app_routing = RouterModule.forRoot(routes, {useHash: true});
