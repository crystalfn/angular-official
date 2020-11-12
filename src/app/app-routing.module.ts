import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './pages/character/character.component';
import { DocumentsComponent } from './pages/documents/documents.component';

const routes: Routes = [
  { path: "character", component:  CharacterComponent },
  { path: "documents", component:  DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
