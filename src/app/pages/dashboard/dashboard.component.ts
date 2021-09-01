import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from "../../services/http-request.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userList = []
  showDetail = false
  selectedUser = []

  constructor(
    public httpService: HttpRequestService
  ) { }

  ngOnInit(): void {
    this.httpService.get().subscribe(res => {
      this.userList = res.data;
    });

  }
  clickedUser(ev: any){
    this.showDetail = true
    this.selectedUser = ev
  }

}
