import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  getMusicSuccess,
  getMusicFailure,
  addMusicSuccess,
  addMusicFailure,
  updateMusicSuccess,
  updateMusicFailure,
  deleteMusicSuccess,
  deleteMusicFailure,
} from './mucisState';

const App_URL = 'https://music-list-api-n5h9.onrender.com/api/playlist';

function* workWGetMusicFetch() {
  try {
    const response = yield call(fetch, App_URL);
    const formattedMusic = yield response.json();
    yield put(getMusicSuccess(formattedMusic));
  } catch (error) {
    yield put(getMusicFailure());
  }
}

function* workWAddMusic(action) {
  try {
    const response = yield call(fetch, App_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const newMusic = yield response.json();
    yield put(addMusicSuccess(newMusic));
  } catch (error) {
    yield put(addMusicFailure());
  }
}

function* workWUpdateMusic(action) {
  try {
    const response = yield call(fetch, `${App_URL}/${action.payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload.data),
    });
    const updatedMusic = yield response.json();
    yield put(updateMusicSuccess(updatedMusic));
  } catch (error) {
    yield put(updateMusicFailure());
  }
}

function* workWDeleteMusic(action) {
  try {
    yield call(fetch, `${App_URL}/${action.payload}`, {
      method: 'DELETE',
    });
    yield put(deleteMusicSuccess(action.payload));
  } catch (error) {
    yield put(deleteMusicFailure());
  }
}

function* musicSaga() {
    yield takeEvery('musics/getMusicFetch', workWGetMusicFetch);
    yield takeLatest('musics/addMusic', workWAddMusic);
    yield takeLatest('musics/updateMusic', workWUpdateMusic);
    yield takeLatest('musics/deleteMusic', workWDeleteMusic);
}

export default musicSaga;
