import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReposRoutingModule} from './repos-routing.module';
import {ListComponent} from './components/list/list.component';
import {SearchComponent} from './components/search/search.component';
import {CardComponent} from './components/card/card.component';
import {DetailComponent} from './components/detail/detail.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth.interceptor";


@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    CardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ReposRoutingModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class ReposModule {
}
