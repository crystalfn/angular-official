import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeTest',
  templateUrl: './pipeTest.component.html',
  styleUrls: ['./pipeTest.component.less']
})
export class PipeTestComponent implements OnInit {
  inputNumber = 7;
  exponent = 1;

  constructor() { }

  ngOnInit() {
  }

}
