import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {DetailComponent} from "./components/detail/detail.component";

const routes: Routes = [
  {
    path: 'repos',
    children: [
      { path: '', component: ListComponent },
      { path: 'detail/:owner/:repo', component: DetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
