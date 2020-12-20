import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.less']
})
export class ComponentComponent implements OnInit {
  firstTitle: string = 'firstTitle';

  constructor() { }

  ngOnInit() {
  }

  handleFirstTitleClick() {
    alert("This is first title click!");
  }

  handleFirstDescriptionClick() {
    alert("This is first description click!");
  }
}
