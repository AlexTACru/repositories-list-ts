import configureStore from 'redux-mock-store';

import * as actions from './repositories';
import { ActionTypes } from "./repositories";

const mockStore = configureStore();

describe('RepositoriesList actions', () => {
  // beforeEach(() => store.clearActions);
  test('Correct dispatch SearchRepositories', () => {
    const store = mockStore();
    const name = 'test';
    const todoId = 0;
    const expectedAddTodoAction = {
      payload: {
        todo: {
          id: todoId,
          name,
          done: false,
        }
      },
      type: ActionTypes.GET_REPOSITORIES,
    };

    store.dispatch(actions.addTodo(name));
    expect(store.getActions()).toEqual([expectedAddTodoAction]);
  });

  test('Correct toggle todo by id', () => {
    const store = mockStore();
    const todoId = 0;

    const expectedToggleAction = {
      payload: { todoId },
      type: ActionTypes.TOGGLE_TODO,
    };

    store.dispatch(actions.toggleTodo(todoId));
    expect(store.getActions()).toEqual([expectedToggleAction]);
  })
});
