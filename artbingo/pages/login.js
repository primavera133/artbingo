// ./pages/login.js
import React, { Component } from 'react'
import Router from 'next/router'
import AuthService from '../utils/AuthService'
import Page from '../components/page'
import { withReduxSaga } from "../store"

import LoginFields from '../components/login'

const auth = new AuthService('http://localhost:3000')

class Login extends Component {
	constructor (props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount () {
		if (auth.loggedIn()) {
			Router.push('/games')   // redirect if you're already logged in
		}
	}

	handleSubmit (e) {
		e.preventDefault()
		// yay uncontrolled forms!
		auth.login(e.target.email.value)
			.then(res => {
				console.log(res)
				Router.push('/games')
			})
			.catch(e => console.log(e))  // you would show/hide error messages with component state here
	}

	render () {
		return (
			<Page title="Login page">
				<form onSubmit={this.handleSubmit}>
					<LoginFields/>
				</form>
			</Page>
		)
	}
}

export default withReduxSaga(Login)