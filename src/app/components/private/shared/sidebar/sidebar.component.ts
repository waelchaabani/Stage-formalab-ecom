import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public isAdmin! : Boolean
  public isClient! : Boolean
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.isAdmin = this.userservice.isLoggedAdmin()
    this.isClient = this.userservice.isLoggedClient()
  }

}
