import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]
  constructor( private productService:ProductService,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
    
  }

  getAllProducts() {
    this.productService.findAllProducts().subscribe(
      (res) => this.products = res,
      (err) => console.log(err)
    )
  }

  deleteProduct(product: any) {
    
    this.productService.deleteProduct(product.id).subscribe(
      (result) => {
 
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
      },
      (err) => {
        console.log(err);
      }

    )
  }
}
