import React from 'react';
import styled from 'styled-components';
import { Input, Label } from 'rebass'

const MyInput = styled(Input)`
	box-sizing: border-box;
	background-color: white !important;
`

class InputEmail extends React.Component {

	render () {
		const { inputId, labelText = "E-post", placeholder = 'aa@bb.cc' } = this.props
		return (
			<div>
				<Label htmlFor={inputId}>
					{labelText}
				</Label>
				<MyInput id={inputId} placeholder={placeholder}/>
			</div>
		)
	}
}

export default InputEmail