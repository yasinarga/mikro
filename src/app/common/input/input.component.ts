import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type = 'text'
  @Input() value = ''
  @Input() placeholder = ''
  @Input() name = ''
  @Input() text = ''

  @Output() sendInputEmitter = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {

  }

  sendMessage(e:any){
    this.sendInputEmitter.emit({value :e.target.value , name: this.name})
  }



}
