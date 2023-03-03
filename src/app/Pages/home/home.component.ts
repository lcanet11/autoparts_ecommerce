import { Component } from '@angular/core';
import { Producto, ResponseProducto } from 'src/app/Interfaces/Productos';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos:Producto[] = []
  constructor(private productosService:ProductosService){
    this.init()
  }
  async init(){
    try{
      const response:ResponseProducto = await this.productosService.getAllPromise()
      this.productos=response.results   
    }catch(e){
      console.log(e)
    }
  }

  
}
