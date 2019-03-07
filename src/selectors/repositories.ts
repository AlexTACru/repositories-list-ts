import { IState } from '../reducers';
import { createSelector } from 'reselect';

const getRepositoriesState = ((state: IState) => state.repositories);

export const getRepositoriesList = createSelector([getRepositoriesState], (state) => state.items);
