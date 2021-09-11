import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb: FormBuilder,private userservice:UserService,private router:Router) {

    let formControls = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\.#?!@$%^&*-]).{0,}$"),
        Validators.minLength(8)
      ]),
      repassword: new FormControl('',[
        Validators.required,
      ])
    }

    this.registerForm = this.fb.group(formControls)
  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }

  ngOnInit(): void {
    let IsLoggedIn = this.userservice.isLoggedIn();

    if (IsLoggedIn) {
      this.router.navigate(['home']);
    } 
  }

  register() {

    let data = this.registerForm.value;

    let user = new User(undefined,data.firstname,data.lastname,data.email,data.password);
    console.log(user)

    this.userservice.register(user).subscribe(
      res=>{
        this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    )
    
  }
  
}
