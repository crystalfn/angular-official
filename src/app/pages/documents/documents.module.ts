import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';

import { BriefComponent } from './brief/brief.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DocumentsComponent,
    BriefComponent
  ]
})
export class DocumentsModule { }
