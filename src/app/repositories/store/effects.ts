import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GithubService } from '../services/github.service';
import { getRepositories, GetRepositoriesFailure, getRepositoriesSuccess } from './actions';

@Injectable()
export class RepositoriesEffects {
  getRepositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRepositories),
      mergeMap(() =>
        this.githubService.getRepositories().pipe(
          map((repositories) => getRepositoriesSuccess({ repositories })),
          catchError((error) => of(GetRepositoriesFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private githubService: GithubService) {}
}
