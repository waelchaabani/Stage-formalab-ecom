import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  updateCategoryForm: FormGroup
  constructor(private fb: FormBuilder, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router,private userservice:UserService) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    }
    this.updateCategoryForm = this.fb.group(formControls);
   }

  ngOnInit(): void {
    this.InitializeUpdateFormValues();
    
  }

  get name(): any { return this.updateCategoryForm.get('name') }

  updateCategory() {
    let updatedCategory = this.updateCategoryForm.value;
    updatedCategory.id = this.route.snapshot.paramMap.get('id');
    this.categoryService.updateCategory(updatedCategory).subscribe(
      (result) => {
        this.router.navigateByUrl('/admin/category/list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  InitializeUpdateFormValues() {
    const categoryId = this.route.snapshot.paramMap.get('id');
    this.categoryService.findCategoryById(categoryId).subscribe(
      (result) => {
        this.updateCategoryForm.setValue({
          name : result.name
        })
      },
      (err) => console.log(err) 
    )
  }
}
