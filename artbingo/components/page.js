import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import {
	Provider,
	Heading,
	Container,
	Fixed,
	Toolbar,
	NavLink
} from 'rebass'

function Page ({ error, lastUpdate, title, children }) {
	return (
		<Provider
			theme={{
				font: '"Avenir Next", Helvetica, sans-serif',
				monospace: '"SF Mono", "Roboto Mono", Menlo, monospace',
			}}>

			<Head>
				<title>Artbingo: {title}</title>
			</Head>

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

				<Heading is="h1" children='Next.js + Rebass' mb={3} center mt={5}>
					{title}
				</Heading>

				{children}

				{error &&
				<p style={{ color: 'red' }}>
					Error: {error.message}
				</p>}
			</Container>
		</Provider>
	)
}

export default connect(state => state)(Page)
