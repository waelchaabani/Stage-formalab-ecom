import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public IsLoggedIn!: Boolean;

  constructor(private userservice:UserService,private router :Router
    ) { }

  ngOnInit(): void {
    this.IsLoggedIn = this.userservice.isLoggedIn();
  }

  logout(){
    localStorage.removeItem("myToken");
    this.IsLoggedIn = this.userservice.isLoggedIn();

    this.router.navigate(['/login']);

  }

}
