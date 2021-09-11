import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = "http://localhost:8080/products/";

  constructor(private http:HttpClient) { }

  addProduct(product:any){
    return this.http.post<any>(this.productUrl + 'add',product);
  }
  findAllProducts(){
    return this.http.get<any>(this.productUrl + 'all');
  }
  findProductById(id:any){
    return this.http.get<any>(this.productUrl + id);
  }
  updateProduct(product:any){
    return this.http.patch<any>(this.productUrl + 'update',product)
  }
  deleteProduct(id: any){
    return this.http.delete<any>(this.productUrl + `delete/${id}`)
  }
}