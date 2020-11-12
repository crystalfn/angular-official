import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './pages/character/character.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { BriefComponent } from './pages/documents/brief/brief.component';

const routes: Routes = [
  { path: "character", component:  CharacterComponent },
  { path: "documents", component:  DocumentsComponent },
  { path: "documents/brief", component: BriefComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
