// ./pages/login.js
import React, { Component } from 'react'
import Router from 'next/router'
import AuthService from '../utils/AuthService'
import Page from '../components/page'
import { withReduxSaga } from "../store"

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
		auth.login(this.refs.email.value, this.refs.password.value)
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
					<input type="email" ref="email"/>
					<input type="password" ref="password"/>
					<input type="submit" value="Submit"/>
				</form>
			</Page>
		)
	}
}

export default withReduxSaga(Login)