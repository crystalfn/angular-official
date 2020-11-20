import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basicKnowledge',
  templateUrl: './basicKnowledge.component.html',
  styleUrls: ['./basicKnowledge.component.less']
})

export class BasicKnowledgeComponent implements OnInit {
  listOfPerson;
  isShowEdit: boolean = false;
  isUpdateLoading: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    const url = "http://localhost:3000/basicKnowledge";
    this.http.get(url).subscribe(response => {
      this.listOfPerson = response;
    })
  }

  showEditModal(): void {
    this.isShowEdit = true;
  }

  closeEditModal(): void {
    this.isShowEdit = false;
  }

  updatePersonMessage(): void {
    this.isUpdateLoading = true;
    setTimeout(() => {
      this.isShowEdit = false;
      this.isUpdateLoading = false;
    }, 3000);
    console.log("更新个人信息");
  }

}
