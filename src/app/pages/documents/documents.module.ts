import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { DocumentsComponent } from './documents.component';
import { BriefComponent } from './brief/brief.component';
import { BasicKnowledgeComponent } from './basicKnowledge/basicKnowledge.component';
import { EditBasicKnowledgeComponent } from './basicKnowledge/editBasicKnowledge/editBasicKnowledge.component';

@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzResultModule,
    NzNotificationModule
  ],
  declarations: [
    DocumentsComponent,
    BriefComponent,
    BasicKnowledgeComponent,
    EditBasicKnowledgeComponent
  ]
})
export class DocumentsModule { }
