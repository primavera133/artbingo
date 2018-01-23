import { connect } from 'react-redux'

function BingoList ({ bingoList }) {
	return (
		<div>
			{JSON.stringify(bingoList)}
			{bingoList && (
				<div>
					{JSON.stringify(bingoList)}
				</div>
			)}
		</div>
	)
}

export default connect(state => state)(BingoList)
