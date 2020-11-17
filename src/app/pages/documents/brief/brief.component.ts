import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.less']
})
export class BriefComponent implements OnInit {
  briefs;

  constructor() { }

  ngOnInit() {
    fetch("http://localhost:3000/brief")
      .then((response) => response.json())
      .then((data) => this.briefs = data);
  }

}
