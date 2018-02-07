// utils/AuthService.js
export default class AuthService {
	constructor (domain) {
		this.domain = domain || 'http://localhost:3000'
	}

	login = (email) => {
		// Get a token
		return this.fetch(`${this.domain}/api/token`, {
			method: 'POST',
			body: JSON.stringify({
				email
			})
		}).then(res => {
			this.setToken(res.id_token)
			return this.fetch(`${this.domain}/api/user`, {
				method: 'GET'
			})
		}).then(res => {
			this.setProfile(res)
			return Promise.resolve(res)
		})
	}

	loggedIn = () => {
		// Checks if there is a saved token and it's still valid
		const token = this.getToken()
		return !!token && !this.isTokenExpired(token) // handwaiving here
	}

	isTokenExpired = (token) => {
		return false; //TODO: Set time limit
	}

	setProfile = (profile) => {
		// Saves profile data to localStorage
		localStorage.setItem('profile', JSON.stringify(profile))
	}

	getProfile = () => {
		// Retrieves the profile data from localStorage
		const profile = localStorage.getItem('profile')
		return profile ? JSON.parse(localStorage.profile) : {}
	}

	setToken = (idToken) => {
		// Saves user token to localStorage
		localStorage.setItem('id_token', idToken)
	}

	getToken = () => {
		// Retrieves the user token from localStorage
		return localStorage.getItem('id_token')
	}

	logout = () => {
		// Clear user token and profile data from localStorage
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
	}

	_checkStatus = (response) => {
		// raises an error in case response status is not a success
		if (response.status >= 200 && response.status < 300) {
			return response
		} else {
			const error = new Error(response.statusText)
			error.response = response
			throw error
		}
	}

	fetch = (url, options) => {
		// performs api calls sending the required authentication headers
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}

		if (this.loggedIn()) {
			headers['Authorization'] = 'Bearer ' + this.getToken()
		}

		return fetch(url, {
			headers,
			...options
		})
			.then(this._checkStatus)
			.then(response => response.json())
	}
}