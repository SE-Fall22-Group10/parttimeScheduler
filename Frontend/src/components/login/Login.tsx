import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {getUserAfterVerification} from '../../apiCalls';
import type {LoginProps} from '../../interface';
import './Login.css';

const Login: React.FC<LoginProps> = (props: LoginProps): JSX.Element => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const handleLogin = async () => {
		try {
			const user = await getUserAfterVerification(username, password);
			console.log(user);
		} catch (error: unknown) {
			console.log('Error in login');
		}
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Enter Username'
				value={username}
				onChange={e => {
					setUsername(e.target.value);
				}}
			/>
			<input
				type='password'
				placeholder='Enter Password'
				value={password}
				onChange={e => {
					setPassword(e.target.value);
				}}
			/>
			<Button
				variant='primary'
				onClick={handleLogin}
			>
        Login
			</Button>
		</div>
	);
};

export default Login;
