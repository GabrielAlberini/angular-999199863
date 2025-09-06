import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { ProductCard } from "../../components/product-card/product-card";
import { ProductModel, ProductService } from './products.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [Header, Footer, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  // productos = [
  //   {
  //     id: 1,
  //     title: "Auriculares inalámbricos",
  //     category: "Electrónica",
  //     description: "Auriculares Bluetooth con cancelación de ruido y batería de 20 horas.",
  //     price: 75.99
  //   },
  //   {
  //     id: 2,
  //     title: "Camiseta básica",
  //     category: "Ropa",
  //     description: "Camiseta 100% algodón, disponible en varios colores y talles.",
  //     price: 19.99
  //   },
  //   {
  //     id: 3,
  //     title: "Silla ergonómica",
  //     category: "Hogar",
  //     description: "Silla con soporte lumbar y ajuste de altura para mayor comodidad.",
  //     price: 129.99
  //   },
  //   {
  //     id: 4,
  //     title: "Reloj inteligente",
  //     category: "Tecnología",
  //     description: "Smartwatch con monitor de ritmo cardíaco, GPS y resistencia al agua.",
  //     price: 199.99
  //   },
  //   {
  //     id: 5,
  //     title: "Mochila de viaje",
  //     category: "Accesorios",
  //     description: "Mochila resistente al agua con capacidad de 30 litros y múltiples bolsillos.",
  //     price: 45.50
  //   }
  // ]

  productos: ProductModel[] = []
  cargando = true

  constructor(private productService: ProductService) { }

  async ngOnInit(): Promise<void> {
    try {
      const data = await firstValueFrom(this.productService.getProducts())
      this.productos = data
    } catch (error) {
      console.log("Error al consumir la data :(")
    } finally {
      this.cargando = false
    }
  }
}
