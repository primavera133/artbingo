import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags }
	}

	render () {
		const { title, children, error, styleTags } = this.props
		return (<html>
			<Head>
				<title>Artbingo</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				{styleTags}
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
			</html>
		)
	}
}
