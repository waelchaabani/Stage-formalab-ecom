import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = []
  allcategories: Category[] = []
name:string=""

  constructor(private categoryService: CategoryService,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getAllCategories();
    
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (result) => {
        this.categories = result;
        this.allcategories=result
      },
      (err) => {
        console.log(err);      
      }
    )
  }
  
  deleteCategory(category: any) {
    //1st method of deleting from view without refreshing
    /* let index = this.categories.indexOf(category);
    this.categories.splice(index, 1); */
    
    this.categoryService.deleteCategory(category.id).subscribe(
      (result) => {
 
        let index = this.categories.indexOf(category);
        this.categories.splice(index, 1);
        //2nd method of deleting from view without refreshing
        //this.getAllCategories();
      },
      (err) => {
        console.log(err);
      }

    )
  }
  filterByCategory(name: string ) {
     this.categories = this.allcategories.filter( (c) => c.name?.includes(name));
  }
}
