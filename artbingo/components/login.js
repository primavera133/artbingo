import React from 'react';
import styled from 'styled-components';
import InputEmail from '../components/inputemail'
import SubmitButton from '../components/submitbutton'

const Wrapper = styled.div`
	max-width: 420px;
	background-color: #eee;
	margin: 0 auto;
	padding: 12px;
	border-radius: 4px;
`

class LoginFields extends React.Component {

	render () {
		return (
			<Wrapper>
				<InputEmail inputId={'apa'}/>
				<SubmitButton/>
			</Wrapper>
		)
	}
}

export default LoginFields