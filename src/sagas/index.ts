import { call, takeLatest, put } from 'redux-saga/effects';

import {
  getRepositoriesReceive,
  IGetRepositoriesAction,
  ActionTypes,
} from '../actions/repositories';
import request from './request';

function* getRepositories(action: IGetRepositoriesAction) {
  try {
    const { name } = action.payload;
    const url = `https://api.github.com/search/repositories?q=${name}+language:javascript&sort=stars&order=desc`;
    const options = {
      method: 'GET',
    };
    const res = yield call(request, url, options);

    yield put(getRepositoriesReceive(res));
  } finally {
    console.log('Get Repositories saga exiting');
  }
}

function* repositoriesSaga() {
  yield takeLatest(ActionTypes.GET_REPOSITORIES, getRepositories);
}

export default repositoriesSaga;
