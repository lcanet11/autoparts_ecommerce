import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Description, Producto, ProductoDescription } from 'src/app/Interfaces/Productos';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id:string
  producto!:ProductoDescription
  constructor(
    private activateRoute: ActivatedRoute,
    private productosService:ProductosService
  ){
    this.id = this.activateRoute.snapshot.paramMap.get("id") || ""
    this.init()
  }
  async init(){
    try{
      const producto:Producto = await this.productosService.getById(this.id)
      const description:Description = await this.productosService.getDescriptionById(this.id)
      this.producto = {detalle:producto,description}
    }catch(e){
      console.log(e)
    }
  }
}
