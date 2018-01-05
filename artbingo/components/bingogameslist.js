import Link from 'next/link'
import { connect } from 'react-redux'

function BingoGamesList ({ bingoGames }) {
	return (
		<div>
			{bingoGames && (
				<div>
					{bingoGames.map((game, index) => {
						return (<div key={index}>
							<Link as={`/games/${game.id}`} href={`/games?id=${game.id}`}>
								<a>spel {game.id}</a>
							</Link>
						</div>)
					})}
				</div>
			)}
		</div>
	)
}

export default connect(state => state)(BingoGamesList)
