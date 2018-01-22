/* global fetch */

import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

import { actionTypes, failure, loadBingoGamesSuccess, loadBingoGameSuccess, loadDataSuccess } from './actions'

es6promise.polyfill()
const baseUrl = `${process.env.PROTOCOL}://${process.env.DOMAIN}:${process.env.PORT}`

function* loadDataSaga () {
	try {
		const res = yield fetch(`${baseUrl}/api/species`)
		const data = yield res.json()
		yield put(loadDataSuccess(data))
	} catch (err) {
		yield put(failure(err))
	}
}

function* loadBingoGamesSaga () {
	try {
		const res = yield fetch(`${baseUrl}/api/games`)
		const data = yield res.json()
		yield put(loadBingoGamesSuccess(data))
	} catch (err) {
		yield put(failure(err))
	}
}

function* loadBingoGameSaga (params) {
	try {
		const res = yield fetch(`${baseUrl}/api/game/${params.payload}`)
		const data = yield res.json()
		yield put(loadBingoGameSuccess(data))
	} catch (err) {
		yield put(failure(err))
	}
}

function* rootSaga () {
	yield all([
		takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
		takeLatest(actionTypes.LOAD_BINGO_GAMES, loadBingoGamesSaga),
		takeLatest(actionTypes.LOAD_BINGO_GAME, loadBingoGameSaga)
	])
}

export default rootSaga
