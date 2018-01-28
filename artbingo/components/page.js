import Link from 'next/link'
import { connect } from 'react-redux'
import {
	Heading,
	Container,
	Fixed,
	Toolbar,
	NavLink
} from 'rebass'

function Page ({ error, lastUpdate, title, children }) {
	return (
		<div>
			<Heading is="h1" children='Next.js + Rebass' mb={3} center>
				{title}
			</Heading>
			<Container>
				<Fixed top left right>
					<Toolbar bg='darkolivegreen'>
						<Link href={'/'}>
							<NavLink>
								Home
							</NavLink>
						</Link>
						<Link href={`/games`}>
							<NavLink>
								Games
							</NavLink>
						</Link>
						<Link href={`/lists`}>
							<NavLink>
								Lists
							</NavLink>
						</Link>
						<Link href={`/login`}>
							<NavLink ml='auto'>
								Login
							</NavLink>
						</Link>
					</Toolbar>
				</Fixed>

				{children}

				{error &&
				<p style={{ color: 'red' }}>
					Error: {error.message}
				</p>}
			</Container>
		</div>
	)
}

export default connect(state => state)(Page)
