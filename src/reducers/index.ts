import { combineReducers } from 'redux';

import * as fromRepositories from './Repositories';

export interface IState {
  repositories: fromRepositories.IState;
}

export const initialState: IState = ({
  repositories: fromRepositories.initialState,
});

export const reducer = () => (
  combineReducers<IState>({
    repositories: fromRepositories.reducer,
  })
);
