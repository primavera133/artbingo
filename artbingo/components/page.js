import Link from 'next/link'
import { connect } from 'react-redux'

function Page ({ error, lastUpdate, linkTo, title, children }) {
	return (
		<div>
			<h1>
				{title}
			</h1>
			<nav>
				<Link href={linkTo}>
					<a>Navigate</a>
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
