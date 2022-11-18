import { createReducer, on } from '@ngrx/store';
import { RepositoriesStateInterface } from '../models/repositoriesState.interface';
import { getRepositories, GetRepositoriesFailure, getRepositoriesSuccess } from './actions';

export const initialState: RepositoriesStateInterface = {
  isLoading: false,
  repositories: [],
  error: null
};

export const reducers = createReducer(
  initialState,
  on(getRepositories, (state) => ({ ...state, isLoading: true })),
  on(getRepositoriesSuccess, (state, action) => ({ ...state, isLoading: false, repositories: action.repositories })),
  on(GetRepositoriesFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
);
