import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpRequestService} from "../../services/http-request.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit ,OnChanges{

  @Input() userDetail:any

  fullDetail:any

  constructor(
      private httpRequest : HttpRequestService
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    let id  = changes.userDetail.currentValue.id
    if(id) {
      this.getFullDetail(id)
    }
  }


  getFullDetail(id:any){
    this.httpRequest.get(`user/${id}`).subscribe(res=> {
      this.fullDetail = res
    })
  }

}
