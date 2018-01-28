import React from 'react'
import {
  Flex,
  Box,
  Blockquote
} from 'rebass'

import {loadBingoGames} from '../actions'
import {withReduxSaga} from '../store'
import Page from '../components/page'

class Start extends React.Component {
  static async getInitialProps({store}) {
    if (!store.getState().bingoGames.length) {
      store.dispatch(loadBingoGames())
    }
  }

  render() {
    return <Page title='Start'>
			<Flex justify='center'>

				<Box width={1 / 2}>
					<Blockquote center fontSize={3} py={4}>
						"Artbingo is the wordfeud for 2018" — Art B. Ingo
					</Blockquote>
				</Box>
				<Box width={6 / 12}>
					<Blockquote center fontSize={3} py={4}>
						"Fun, fun, artbingo fun" – <span style={{'white-space': 'nowrap'}}>B. I. Olog</span>
					</Blockquote>
				</Box>
			</Flex>
    </Page>
  }
}

export default withReduxSaga(Start)
