import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { DocumentsComponent } from './documents.component';
import { BriefComponent } from './brief/brief.component';
import { BasicKnowledgeComponent } from './basicKnowledge/basicKnowledge.component'

@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
  ],
  declarations: [
    DocumentsComponent,
    BriefComponent,
    BasicKnowledgeComponent,
  ]
})
export class DocumentsModule { }
