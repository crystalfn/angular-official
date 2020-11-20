import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basicKnowledge',
  templateUrl: './basicKnowledge.component.html',
  styleUrls: ['./basicKnowledge.component.less']
})

export class BasicKnowledgeComponent implements OnInit {
  listOfPerson;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    const url = "http://localhost:3000/basicKnowledge";
    this.http.get(url).subscribe(response => {
      this.listOfPerson = response;
    })
  }

}
