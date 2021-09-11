import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = "http://localhost:8080/categories/";

  constructor(private http: HttpClient) { }
  getAllCategories() {
    return this.http.get<any>(this.categoryUrl + 'all');
  }

  findCategoryById(id: any) {
    return this.http.get<any>(this.categoryUrl + id);
  }

  addCategory(category : Category) {
    return this.http.post<any>(this.categoryUrl + 'add', category);
  }

  deleteCategory(id: any) {
    return this.http.delete<any>(this.categoryUrl + `delete/${id}`);
  }

  updateCategory(category : Category) {
    return this.http.patch<any>(this.categoryUrl + "update", category);
  }
}
