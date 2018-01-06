import { connect } from 'react-redux'

function BingoGame ({ bingoGame }) {
	return (
		<div>
			{bingoGame && (
				<div>
					{JSON.stringify(bingoGame)}
				</div>
			)}
		</div>
	)
}

export default connect(state => state)(BingoGame)
