import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  updateProductForm: FormGroup
  categories:any[]=[]
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private productService: ProductService,
    private CategoryService:CategoryService,private router:Router,private userservice:UserService) {

    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        
      ])
    }

    this.updateProductForm = this.fb.group(formControls)
  }

  get name() { return this.updateProductForm.get('name') }
  get description() { return this.updateProductForm.get('description') }
  get price() { return this.updateProductForm.get('price') }
  get category() { return this.updateProductForm.get('category') }
  get image() { return this.updateProductForm.get('image') }

  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe(
      res=>this.categories=res,
      err=>console.log(err)
    )
    this.productService.findProductById(this.route.snapshot.params.id).subscribe(
      (res) => {        
        this.updateProductForm.patchValue({
          name: res.name,
          description: res.description,
          price: res.price, 
          category: res.category?.name,
          image: res.imageurl
    
        })
      },
      err => console.log(err)
    )
    let IsLoggedIn = this.userservice.isLoggedIn();

    if (IsLoggedIn) {
      this.router.navigate(['/home']);
    } 
    
  }

  updateProduct() {
    let data = this.updateProductForm.value;
    let product=new Product(this.route.snapshot.params.id,data.name,data.description,data.image,data.price,new Category(data.category))
    console.log(product)

    this.productService.updateProduct(product).subscribe(
      res=>this.router.navigateByUrl("admin/product/list"),
      err=>console.log(err)
      
    )
  }
}
