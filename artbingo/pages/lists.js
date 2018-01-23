import React from 'react'

import { loadBingoLists } from '../actions'
import { withReduxSaga } from '../store'
import Page from '../components/page'
import BingoLists from '../components/bingolists'

class Start extends React.Component {
	static async getInitialProps ({ store }) {
		if (!store.getState().bingoLists.length) {
			store.dispatch(loadBingoLists())
		}
	}

	render () {
		return <Page title='Lists Page'>
			<BingoLists/>
		</Page>
	}
}

export default withReduxSaga(Start)
