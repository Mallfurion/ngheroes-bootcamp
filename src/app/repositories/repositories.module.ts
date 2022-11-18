import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoSearchComponent } from './components/repo-search/repo-search.component';
import { DetailComponent } from './components/detail/detail.component';
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './inteceptors/auth.interceptor';

@NgModule({
  declarations: [ListComponent, RepoCardComponent, RepoSearchComponent, DetailComponent],
  imports: [CommonModule, FormsModule, RepositoriesRoutingModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class RepositoriesModule {}
