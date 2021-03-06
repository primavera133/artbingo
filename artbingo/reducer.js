import { actionTypes } from './actions'

export const initialState = {
	error: false,
	lastUpdate: 0,
	placeholderData: null,
	bingoGames: [],
	bingoGame: null
}

function reducer (state = initialState, action) {
	switch (action.type) {
		case actionTypes.FAILURE:
			return {
				...state,
				...{ error: action.error }
			}

		case actionTypes.LOAD_DATA_SUCCESS:
			return {
				...state,
				...{ placeholderData: action.data }
			}

		case actionTypes.LOAD_BINGO_GAMES_SUCCESS:
			return {
				...state,
				...{ bingoGames: action.data }
			}

		case actionTypes.LOAD_BINGO_GAME_SUCCESS:
			return {
				...state,
				...{ bingoGame: action.data }
			}

		default:
			return state
	}
}

export default reducer
