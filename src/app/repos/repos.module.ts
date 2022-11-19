import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [SearchComponent, ListComponent, CardComponent, DetailComponent],
  imports: [CommonModule, ReposRoutingModule, FormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class ReposModule {}
