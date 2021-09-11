import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getAllUsersUrl = "http://127.0.0.1:8080/utilisateur";
  private getOneUserUrl = "http://127.0.0.1:8080/utilisateur";
  private deleteUserUrl = "http://127.0.0.1:8080/utilisateur";
  private addUserUrl = "http://127.0.0.1:8080/utilisateur";
  private updateUserUrl = "http://127.0.0.1:8080/utilisateur";

  private registerUserUrl="http://127.0.0.1:8080/users/register";
  private loginUserUrl="http://127.0.0.1:8080/users/login";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }

  addUser(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }

  updateUser(user:User){
    return this.http.put<any>(this.updateUserUrl, user);
  }

  //Register & Login

  register(user : User){
    return this.http.post<any>(this.registerUserUrl, user);
  }

  login(user:User){
    return this.http.post<any>(this.loginUserUrl, user);
  }

  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
    
  }
  isLoggedAdmin() {
    let token = localStorage.getItem('myToken')

    if (token) {

      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);

      if (decodedToken.data.role == "admin") {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

  isLoggedClient() {
    
    let token = localStorage.getItem('myToken')
    console.log(token)

    if (token) {
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)

      if (decodedToken.data.role == "client") {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

  
}
