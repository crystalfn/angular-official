import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childComponent',
  templateUrl: './childComponent.component.html',
  styleUrls: ['./childComponent.component.less']
})
export class ChildComponentComponent implements OnInit {
  @Input() firstTitle;

  constructor() { }

  ngOnInit() {
  }

}
