export const actionTypes = {
	FAILURE: 'FAILURE',
	LOAD_DATA: 'LOAD_DATA',
	LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
	LOAD_BINGO_GAMES: 'LOAD_BINGO_GAMES',
	LOAD_BINGO_GAMES_SUCCESS: 'LOAD_BINGO_GAMES_SUCCESS'
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

export function loadBingoGames () {
	return { type: actionTypes.LOAD_BINGO_GAMES }
}

export function loadBingoGamesSuccess (data) {
	return {
		type: actionTypes.LOAD_BINGO_GAMES_SUCCESS,
		data
	}
}