import { Component, OnInit } from '@angular/core';
import { Bebidas } from 'src/app/drinks-class/Bebidas'; // Importa la clase Bebidas

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  bebidas: Bebida[] = [];

  constructor() {}

  ngOnInit() {
    this.obtenerBebidas();
  }

  obtenerBebidas() {
    const bebidasData = new Bebidas();
    this.bebidas = bebidasData.bebidas;
  }
}

interface Bebida {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}
