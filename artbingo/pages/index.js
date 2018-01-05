import React from 'react'

import { loadBingoGames } from '../actions'
import { withReduxSaga } from '../store'
import Page from '../components/page'
import BingoGamesList from '../components/bingogameslist'

class Start extends React.Component {
	static async getInitialProps ({ store }) {
		if (!store.getState().bingoGames.length) {
			store.dispatch(loadBingoGames())
		}
	}

	render () {
		return <Page title='Index Page' linkTo='/other'>
			<BingoGamesList/>
		</Page>
	}
}

export default withReduxSaga(Start)
