import React from 'react';
import styled from 'styled-components';
import { Input, Label } from 'rebass'

const MyInput = styled(Input)`
	box-sizing: border-box;
	background-color: white !important;
`

class InputEmail extends React.Component {

	render () {
		const { identifier, labelText = "E-post", placeholder = 'aa@bb.cc' } = this.props
		return (
			<div>
				<Label htmlFor={identifier}>
					{labelText}
				</Label>
				<MyInput name={identifier} id={identifier} placeholder={placeholder}/>
			</div>
		)
	}
}

export default InputEmail