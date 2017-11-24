import {RouterModule, Routes} from "@angular/router";

import {AboutComponent, PortafolioComponent, ProductoComponent} from "./components/index.paginas";

const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'producto', component: ProductoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const app_routing = RouterModule.forRoot(routes, {useHash: true});
