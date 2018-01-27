import { actionTypes } from './actions'
import bingolists from "./components/bingolists"

export const initialState = {
	error: false,
	lastUpdate: 0,
	placeholderData: null,
	bingoGames: [],
	bingoGame: null,
	bingoLists: [],
	bingoList: null
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

		case actionTypes.LOAD_BINGO_LISTS_SUCCESS:
			return {
				...state,
				...{ bingoLists: action.data }
			}

		case actionTypes.LOAD_BINGO_LIST_SUCCESS:
			return {
				...state,
				bingoList: action.data
			}

		case actionTypes.START_BINGO_GAME_SUCCESS:
			return {
				...state,
				bingoGames: state.bingoGames.concat(action.game)
			}

		default:
			return state
	}
}

export default reducer
