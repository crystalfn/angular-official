import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editBasicKnowledge',
  templateUrl: './editBasicKnowledge.component.html',
  styleUrls: ['./editBasicKnowledge.component.less']
})
export class EditBasicKnowledgeComponent implements OnInit {
  @Input() personMessage: FormGroup;
  @Output() closeEditDialog = new EventEmitter<boolean>();
  @Output() updatePersonMessage = new EventEmitter<FormGroup>();

  constructor() { }

  ngOnInit() { }

  closeDialog(visible: boolean) {
    this.closeEditDialog.emit(visible);
  }

  submit(personMessage: FormGroup) {
    this.updatePersonMessage.emit(personMessage);
  }
}
