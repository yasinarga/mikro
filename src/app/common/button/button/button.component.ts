import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonName = ''
  @Input() type = ''

  @Output() clickButtonEmit = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  clickButton(){
    this.clickButtonEmit.emit(this.type)
  }

}
