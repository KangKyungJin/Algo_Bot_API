import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() algo;
  @Output() sendAlgo = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  sendAlgoToHome() {
    this.sendAlgo.emit(this.algo);
  }

}
