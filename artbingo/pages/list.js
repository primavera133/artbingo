import React from 'react'

import { loadBingoList, startGame } from '../actions'
import { withReduxSaga } from '../store'
import Page from '../components/page'
import BingoList from '../components/bingolist'
import StartGame from "../components/startgame"

class BingoListPage extends React.Component {
	static async getInitialProps ({ store, query }) {
		if (!store.getState().bingoList || store.getState().bingoList._id !== query.id) {
			store.dispatch(loadBingoList(query.id))
		}
	}

	handleClick = (bingoList) => {
		console.log('start game for this list', bingoList._id)
		this.props.dispatch(startGame(bingoList))
	}

	render () {
		return <Page title='List Page'>
			LIST IS: <BingoList/>
			<StartGame list={this.props.bingoList} click={this.handleClick}/>
		</Page>
	}
}

export default withReduxSaga(BingoListPage)