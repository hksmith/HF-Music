import { call, put, takeEvery }  from 'redux-saga/effects';
import { getMusicSuccess } from './mucisState';

const App_URL = 'https://music-list-api-n5h9.onrender.com/api/playlist';

function* workWGetMusicFetch() {
    const musics = yield call(() => fetch(`${App_URL}`));
    console.log(musics);
    console.log(App_URL);
    const formattedMusic = yield musics.json();
    yield put(getMusicSuccess(formattedMusic));
};

function* musicSaga() {
    yield takeEvery('musics/getMusicFetch', workWGetMusicFetch);
}

export default musicSaga;