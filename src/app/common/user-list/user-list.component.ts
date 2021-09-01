import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userList:any[]

  @Output() clickUserEmitter = new EventEmitter

  selectedUser : any

  constructor() { }

  ngOnInit(): void {

  }

  clickUser(item: any){
    this.selectedUser = item
    this.clickUserEmitter.emit(item)
  }

}
