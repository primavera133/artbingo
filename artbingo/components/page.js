import Link from 'next/link'
import Head from 'next/head'
import { connect } from 'react-redux'

function Page ({ error, lastUpdate, title, children }) {
	return (
		<div>
			<Head>
				<title>Artbingo</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
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
