import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  addCategoryForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,private userservice:UserService,
    ) 
  {
    let formControls = {
      categoryName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    }
    this.addCategoryForm = this.fb.group(formControls);
  }

  ngOnInit(): void {

  }
  

  get categoryName(): any { return this.addCategoryForm.get('categoryName') }

  addCategory() {
    let newCategory = this.addCategoryForm.value;    
    let category = new Category(undefined, newCategory.categoryName);
    this.categoryService.addCategory(category).subscribe(
      (result) => {
        this.router.navigateByUrl('/admin/category/list');
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
