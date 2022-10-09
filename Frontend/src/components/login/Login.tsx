import React, {useState} from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import type {LoginProps, UserDetailsObject} from '../../interface';
import {verifyUserLogin} from '../../utils';
// Import loginCss from './Login.module.css';

const Login: React.FC<LoginProps> = (props: LoginProps): JSX.Element => {
	const [userEmail, setUserEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loginMessage, setLoginMessage] = useState<string>('');
	const handleLogin = async () => {
		console.log('button clicked');
		try {
			const user: boolean | UserDetailsObject = await verifyUserLogin(userEmail, password);
			console.log(user);
			if (user === false) {
				props.setIsUserLoggedIn(false);
				setLoginMessage('Invalid email or password');
			} else {
				console.log('here');
				props.setIsUserLoggedIn(true);
				console.log('login successful');
				setLoginMessage('Successful Login');
				props.setUserData(user as UserDetailsObject);
			}
		} catch (error: unknown) {
			console.log('Error in login');
			props.setIsUserLoggedIn(false);
			setLoginMessage('Invalid email or password');
		}
	};

	return (
		<Container style={{display: 'block', height: '50vh', width: '50%', backgroundColor: '#1DBFB8', alignItems: 'center', textAlign: 'center', marginTop: '5%'}}>
			<div>
				<input
					type='text'
					placeholder='Enter Email Id'
					value={userEmail}
					onChange={e => {
						setUserEmail(e.target.value);
					}}
					style={{margin: '13% 5% 0 5%'}}
				/>
			</div>
			<div>
				<input
					type='password'
					placeholder='Enter Password'
					value={password}
					onChange={e => {
						setPassword(e.target.value);
					}}
					style={{margin: '2%'}}
				/>
			</div>
			<div>
				<Button
					variant='primary'
					onClick={handleLogin}
					style={{margin: '2%'}}
				>
        Login
				</Button>
				{loginMessage}
			</div>
		</Container>
	);
};

export default Login;
