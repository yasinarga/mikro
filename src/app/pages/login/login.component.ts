import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginEnum} from "../../common/loginEnum";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  public loginEnum = LoginEnum
  isCorrectInfo = false
  loginForm: FormGroup ;
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(
    private frmBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl( '', [Validators.required ,Validators.minLength(3), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required ,Validators.minLength(3)]),
    })

  }

  getValue(val: any){
    this.loginForm.get(val.name)?.setValue(val.value);
  }

  buttonClickEvent(event: string){
    this.clickLoginButton();
  }

  clickLoginButton(){
    if(this.password?.value === this.loginEnum.password && this.email?.value === this.loginEnum.email){
      this.router.navigateByUrl('dashboard');
    } else {
      this.isCorrectInfo = true
    }
  }
   get password() { return this.loginForm.get('password'); }
   get email() { return this.loginForm.get('email'); }

}


