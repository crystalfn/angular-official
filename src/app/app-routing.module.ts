import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './pages/character/character.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { BriefComponent } from './pages/documents/brief/brief.component';
import { BasicKnowledgeComponent } from './pages/documents/basicKnowledge/basicKnowledge.component';
import { ComponentComponent } from './pages/documents/component/component.component';

const routes: Routes = [
  { path: "character", component:  CharacterComponent },
  { path: "documents", component:  DocumentsComponent },
  { path: "documents/brief", component: BriefComponent },
  { path: "documents/basicKnowledge", component: BasicKnowledgeComponent },
  { path: "documents/component", component: ComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
