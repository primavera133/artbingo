import React from 'react';
import styled from 'styled-components';
import { Button } from 'rebass'

const Wrapper = styled.div`
	margin: 12px 0;
`

class InputEmail extends React.Component {

	render () {
		const { submitLabel = 'Skicka' } = this.props
		return (
			<Wrapper>
				<Button type='submit'>{submitLabel}</Button>
			</Wrapper>
		)
	}
}

export default InputEmail