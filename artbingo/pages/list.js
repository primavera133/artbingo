import React from 'react'

import { loadBingoList } from '../actions'
import { withReduxSaga } from '../store'
import Page from '../components/page'
import BingoList from '../components/bingolist'

class BingoListPage extends React.Component {
	static async getInitialProps ({ store, query }) {
		if (!store.getState().bingoList || store.getState().bingoList._id !== query.id) {
			store.dispatch(loadBingoList(query.id))
		}
	}

	render () {
		return <Page title='List Page'>
			LIST IS: <BingoList/>
		</Page>
	}
}

export default withReduxSaga(BingoListPage)
