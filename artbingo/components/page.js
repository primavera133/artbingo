import Link from 'next/link'
import { connect } from 'react-redux'

function Page ({ error, lastUpdate, title, children }) {
	return (
		<div>
			<h1>
				{title}
			</h1>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				|
				<Link href={`/games`}>
					<a>Games</a>
				</Link>
				|
				<Link href={`/lists`}>
					<a>Lists</a>
				</Link>
			</nav>
			{children}
			{error &&
			<p style={{ color: 'red' }}>
				Error: {error.message}
			</p>}
		</div>
	)
}

export default connect(state => state)(Page)
