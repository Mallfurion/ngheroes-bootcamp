import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [SearchComponent, ListComponent, CardComponent, DetailsComponent],
  imports: [CommonModule, ReposRoutingModule, FormsModule],
  exports: [ListComponent, DetailsComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class ReposModule {}
