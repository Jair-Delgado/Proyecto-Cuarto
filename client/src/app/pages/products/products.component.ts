import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/models/product.models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   products:ProductModel[] = [];
   selectedProduct: UpdateProductDto = {title:'', price:0, description:''};

  constructor(private productService:ProductService) {
   this.editProduct();
  }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts(){
    const url = "https://api.escuelajs.co/api/v1/products";
    this.productService.getAll().subscribe(
      response =>{
        this.products = response;
        console.log(response);
      }
    )
  }
  getProduct(id: ProductModel['id'] ){
    const url = "https://api.escuelajs.co/api/v1/products/id";
    return this.productService.getOne(id).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  createProduct(){
    const data = {
      title: 'esfero',
      price: 45,
      description: 'utiles escolares',
      categoryId: 1,
      images: ["https://api.lorem.space/image/watch?w=640&h=480&r=5922", "https://api.lorem.space/image/watch?w=640&h=480&r=3622"],
    }
    this.productService.store(data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  updateProduct(id: ProductModel['id']){
    const data = {
      title: 'zapatos',
      price: 60,
      description: 'calzado',
    }
    this.productService.update(id, data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  editProduct(){
    this.selectedProduct = {title:'', price:0, description:''};
  }

  deleteProduct(id: ProductModel['id']){
    this.productService.destroy(id).subscribe(
      response =>{
        this.products = this.products.filter(product => product.id != id);
        console.log(response);
      }
    )
  }
}
//Hacer con datos en el navegador los servivicios
//Sin data quemada los verbos http
