import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/app.state';
import { GithubService } from '../../services/github.service';
import { getRepositories } from '../../store/actions';
import { errorSelector, isLoadingSelector, repositoriesSelector } from '../../store/selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  isLoading$ = this.store.pipe(select(isLoadingSelector));
  repositories$ = this.store.pipe(select(repositoriesSelector));
  error$ = this.store.pipe(select(errorSelector));

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(getRepositories());
  }
}
