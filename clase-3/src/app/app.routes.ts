import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Products } from './views/products/products';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "productos",
    component: Products
  }
];
