import Repositories from "../models/Repositories";
import { Action, ActionTypes } from "../actions/repositories";

export interface IState {
  items: Repositories[];
  incomplete_results: boolean;
  total_count: number;
}

export const initialState: IState = {
  items: [],
  incomplete_results: false,
  total_count: 0,
};

export function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_REPOSITORIES_RECEIVE:
      const {
        items,
        total_count,
        incomplete_results,
      } = action.payload;

      return {
        ...state,
        items,
        incomplete_results,
        total_count,
      };
    default:
      return state;
  }
}
