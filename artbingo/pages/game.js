import React from 'react'

import { loadBingoGame } from '../actions'
import { withReduxSaga } from '../store'
import Page from '../components/page'
import BingoGame from '../components/bingogame'

class Start extends React.Component {
	static async getInitialProps ({ store, query }) {
		if (store.getState().bingoGame._id !== query.id) {
      store.dispatch(loadBingoGame(query.id))
		}
	}

	render () {
		return <Page title='Game Page'>
			GAME IS: <BingoGame/>
		</Page>
	}
}

export default withReduxSaga(Start)
