import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-basicKnowledge',
  templateUrl: './basicKnowledge.component.html',
  styleUrls: ['./basicKnowledge.component.less']
})

export class BasicKnowledgeComponent implements OnInit {
  listOfPerson;
  isShowEdit: boolean = false;
  validatePersonMessage: FormGroup;
  url: string = "http://localhost:3000/basicKnowledge";

  constructor(
    public http: HttpClient,
    private personMessage: FormBuilder,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.getBasicKnowledgeData();
    this.initValidatePersonMessage();
  }

  initValidatePersonMessage(): void {
    this.validatePersonMessage = this.personMessage.group({
      id: [null],
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      address: [null, [Validators.required]]
    })
  }

  getBasicKnowledgeData(): void {
    this.http.get(this.url).subscribe(response => {
      this.listOfPerson = response;
    })
  }

  showEditModal(data): void {
    this.isShowEdit = true;

    this.validatePersonMessage.patchValue({
      id: data.id,
      name: data.name,
      age: data.age,
      address: data.address
    });
  }

  closeEditModal(): void {
    this.isShowEdit = false;
  }

  closeEditDialog(visible: boolean) {
    this.isShowEdit = visible;
  }

  onHandleUpdatePersonMessage(personMessage: FormGroup) {
    const dataJson = {
      "id": this.validatePersonMessage.get("id").value,
      "name": this.validatePersonMessage.get("name").value,
      "age": this.validatePersonMessage.get("age").value,
      "address": this.validatePersonMessage.get("address").value,
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http
      .put(this.url + '/' + dataJson.id, dataJson, httpOptions)
      .subscribe(() => {
      this.successNotification();
      this.isShowEdit = false;
      this.getBasicKnowledgeData();
    })
  }

  successNotification(): void {
    this.notification.success( '更新人员信息成功', '' );
  }
}
