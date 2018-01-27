import React from 'react'

class StartGame extends React.Component {
	handleClick = (e) => {
		this.props.click(this.props.list)
	}

	render () {
		return (
			<button onClick={this.handleClick}>
				Starta spel för denna listan
			</button>
		)
	}
}

export default StartGame
