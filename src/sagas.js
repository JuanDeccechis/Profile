
import { call, put, takeEvery, all, takeLatest, select } from 'redux-saga/effects'
import { types, fetchUsersSuccess, fetchUsersFail } from './actions'
import axios from 'axios';

//este saga se deja de ejemplo, pero no se utiliza en la app
function* loadUsers() {
  try {
    const res = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    if(res.status === 200) {
      yield put(fetchUsersSuccess(res.data))
    }
    else {
      yield put(fetchUsersFail())
    }
  } catch (error) {
    yield put(fetchUsersFail(error))
  }
}

function* watchLoadUsers() {
  yield takeEvery(types.FETCH_USERS_START, loadUsers)
}

export default function* rootSaga() {
  yield all([
    watchLoadUsers(),
  ])
}
