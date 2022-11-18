import { createAction, props } from '@ngrx/store';
import { IRepository } from '../models/repository.interface';

enum RepoActions {
  GetRepositories = '[Repos] Get Repositories',
  GetRepositoriesSuccess = '[Repos] Get Repositories Success',
  GetRepositoriesFailure = '[Repos] Get Repositories Failure'
}

export const getRepositories = createAction(RepoActions.GetRepositories);
export const getRepositoriesSuccess = createAction(
  RepoActions.GetRepositoriesSuccess,
  props<{ repositories: IRepository[] }>()
);
export const GetRepositoriesFailure = createAction(RepoActions.GetRepositoriesFailure, props<{ error: string }>());
