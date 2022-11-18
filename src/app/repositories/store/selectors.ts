import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/app.state';

export const repositoriesState = (state: AppStateInterface) => state.repositories;

export const isLoadingSelector = createSelector(repositoriesState, (state) => state.isLoading);
export const repositoriesSelector = createSelector(repositoriesState, (state) => state.repositories);
export const errorSelector = createSelector(repositoriesState, (state) => state.error);
