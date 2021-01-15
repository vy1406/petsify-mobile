import React, { useState } from 'react';
import styled from 'styled-components';
import { ActionButton, Text } from '../../shared/shared.styles';
import { TextInput } from '../../shared/components/TextInput.component';
import { FontSizes } from '../../shared/enums';

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledHeader = styled(Text)`
	font-size: ${FontSizes.l};
`;

const Login: React.FunctionComponent = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitLogin = () => {
		console.log('email: ', email);
		console.log('password: ', password);
	};

	return (
		<Content>
			<StyledHeader>Login into account</StyledHeader>
			<Text>username</Text>
			<TextInput height={'100'} width={'100'} onChange={value => setEmail(value)} />
			<Text>password</Text>
			<TextInput height={'100'} width={'100'} onChange={value => setPassword(value)} />
			<ActionButton onClick={submitLogin}>Login</ActionButton>
		</Content>
	);
};

export default Login;
