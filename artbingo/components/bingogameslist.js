import Link from 'next/link'
import { connect } from 'react-redux'

function BingoGamesList ({ bingoGames }) {
	return (
		<div>
			{bingoGames && (
				<div>
					{bingoGames.map((game, index) => {
						return (<div key={index}>
							<Link as={`/games/${game._id}`} href={`/games?id=${game._id}`}>
								<a>spel {game._id}</a>
							</Link>
						</div>)
					})}
				</div>
			)}
		</div>
	)
}

export default connect(state => state)(BingoGamesList)
