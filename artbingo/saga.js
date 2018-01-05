/* global fetch */

import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

import { actionTypes, failure, loadBingoGamesSuccess, loadDataSuccess } from './actions'

es6promise.polyfill()

function* loadDataSaga () {
	try {
		const res = yield fetch('http://localhost:8000/species')
		const data = yield res.json()
		yield put(loadDataSuccess(data))
	} catch (err) {
		yield put(failure(err))
	}
}

function* loadBingoGamesSaga () {
	try {
		const res = yield fetch('http://localhost:8000/games', {
			headers: {
				'Authorization': `Bearer ${process.env.AUTH_KEY}`
			}
		})
		const data = yield res.json()
		yield put(loadBingoGamesSuccess(data))
	} catch (err) {
		console.log(88888, err)
		yield put(failure(err))
	}
}

function* rootSaga () {
	yield all([
		takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
		takeLatest(actionTypes.LOAD_BINGO_GAMES, loadBingoGamesSaga)
	])
}

export default rootSaga
