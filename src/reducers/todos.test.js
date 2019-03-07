import * as todosReducer from './Repositories';
import { ActionTypes } from '../actions/repositories';

const todo = {
  id: 0,
  name: 'test',
  done: false,
};

describe('RepositoriesList reducer', () => {
  test('Initial state', () => {
    const action = { type: 'fake_action', payload: {} };
    const { initialState } = todosReducer;

    expect(todosReducer.reducer(undefined, action)).toEqual(initialState)
  });

  test('Add Repositories', () => {
    const action = {
      type: ActionTypes.GET_REPOSITORIES,
      payload: { todo },
    };
    const expectedState = {
      todos: [
        todo,
      ]
    };

    expect(todosReducer.reducer(undefined, action)).toEqual(expectedState);
  });

  test('Toggle todo', () => {
    const action = {
      type: ActionTypes.TOGGLE_TODO,
      payload: { todoId: 0 },
    };
    const initialState = { todos: [todo] };
    const expectedState = {
      todos: [
        {
          ...todo,
          done: true,
        }
      ]
    };

    expect(todosReducer.reducer(initialState, action)).toEqual(expectedState)
  })
});
