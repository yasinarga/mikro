import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  email:any =''
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  error = false

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  buttonClickEvent(event: string){
    this.email.match(this.emailRegex)  ? this.router.navigateByUrl('login'): this.error = true
  }

  getValue(event: any){
    this.email = event.value
  }

}
