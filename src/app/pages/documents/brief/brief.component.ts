import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.less']
})
export class BriefComponent implements OnInit {
  briefs;

  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() {
    const url: string = "http://localhost:3000/brief";
    this.http.get(url).subscribe(response => {
      this.briefs = response;
    })
  }

}
