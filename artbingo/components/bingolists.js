import Link from 'next/link'
import { connect } from 'react-redux'

function BingoLists ({ bingoLists }) {
	return (
		<div>
			{bingoLists.length && (
				<div>
					{bingoLists.map((list, index) => {
						return (<div key={index}>
							<Link as={`/list/${list._id}`} href={`/list?id=${list._id}`}>
								<a>lista {index}: {list.name}</a>
							</Link>
						</div>)
					})}
				</div>
			)}
		</div>
	)
}

export default connect(state => state)(BingoLists)
