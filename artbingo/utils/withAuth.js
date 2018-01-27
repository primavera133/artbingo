// utils/withAuth.js - a HOC for protected pages
import React, {Component} from 'react'
import Router from 'next/router'
import AuthService from './AuthService'

export default function withAuth(AuthComponent) {
	const Auth = new AuthService('http://localhost:3000')
	return class Authenticated extends Component {
		constructor(props) {
			super(props)
			this.state = {
				isLoading: true
			};
		}

		componentDidMount () {
			if (!Auth.loggedIn()) {
				Router.push('/login')
			}
			this.setState({ isLoading: false })
		}

		render() {
			return (
				<div>
					{this.state.isLoading ? (
						<div>LOADING....</div>
					) : (
						<AuthComponent {...this.props}  auth={Auth} />
					)}
				</div>
			)
		}
	}
}