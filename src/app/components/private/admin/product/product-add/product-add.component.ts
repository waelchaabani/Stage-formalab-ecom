import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProductForm: FormGroup
  categories:Category[]=[]
  constructor(
    private fb: FormBuilder,
    private service:ProductService,
    private router:Router,
    private serviceCategory:CategoryService,private userservice:UserService) {

    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+.?[0-9]+")
      ]),
      category: new FormControl('',[
        Validators.required
      ]),
      image: new FormControl('',[
      ])
    }

    this.addProductForm = this.fb.group(formControls)
  }

  get name() { return this.addProductForm.get('name') }
  get description() { return this.addProductForm.get('description') }
  get price() { return this.addProductForm.get('price') }
  get category() { return this.addProductForm.get('category') }
  get image() { return this.addProductForm.get('image') }

  ngOnInit(): void {
    this.serviceCategory.getAllCategories().subscribe(
      (res)=>this.categories=res,
      (err)=>console.log(err)   
    )
    
  }

  addProduct(){
    let data = this.addProductForm.value;
    let product=new Product(undefined,data.name,data.description,data.image,data.price,new Category(data.category))
    console.log(product)
    this.service.addProduct(product).subscribe(
      res=>this.router.navigateByUrl("admin/product/list"),
      err=>console.log(err)
      
    )
    
      
  }

}
