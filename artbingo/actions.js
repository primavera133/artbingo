export const actionTypes = {
	FAILURE: 'FAILURE',
	LOAD_DATA: 'LOAD_DATA',
	LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
	LOAD_BINGO_GAMES: 'LOAD_BINGO_GAMES',
	LOAD_BINGO_GAMES_SUCCESS: 'LOAD_BINGO_GAMES_SUCCESS',
	LOAD_BINGO_GAME: 'LOAD_BINGO_GAME',
	LOAD_BINGO_GAME_SUCCESS: 'LOAD_BINGO_GAME_SUCCESS',
	LOAD_BINGO_LISTS: 'LOAD_BINGO_LISTS',
	LOAD_BINGO_LISTS_SUCCESS: 'LOAD_BINGO_LISTS_SUCCESS',
	LOAD_BINGO_LIST: 'LOAD_BINGO_LIST',
	LOAD_BINGO_LIST_SUCCESS: 'LOAD_BINGO_LIST_SUCCESS',
}

export function failure (error) {
	return {
		type: actionTypes.FAILURE,
		error
	}
}

export function loadData () {
	return { type: actionTypes.LOAD_DATA }
}

export function loadDataSuccess (data) {
	return {
		type: actionTypes.LOAD_DATA_SUCCESS,
		data
	}
}

/***** GAMES *****/
export function loadBingoGames () {
	return { type: actionTypes.LOAD_BINGO_GAMES }
}

export function loadBingoGamesSuccess (data) {
	return {
		type: actionTypes.LOAD_BINGO_GAMES_SUCCESS,
		data
	}
}

export function loadBingoGame (id) {
	return { type: actionTypes.LOAD_BINGO_GAME, payload: id }
}

export function loadBingoGameSuccess (data) {
	return { type: actionTypes.LOAD_BINGO_GAME_SUCCESS, data }
}

/****** LISTS ******/

export function loadBingoLists (id) {
	return { type: actionTypes.LOAD_BINGO_LISTS }
}

export function loadBingoListsSuccess (data) {
	return { type: actionTypes.LOAD_BINGO_LISTS_SUCCESS, data }
}

export function loadBingoList (id) {
	return { type: actionTypes.LOAD_BINGO_LIST, payload: id }
}

export function loadBingoListSuccess (data) {
	return { type: actionTypes.LOAD_BINGO_LIST_SUCCESS, data }
}

