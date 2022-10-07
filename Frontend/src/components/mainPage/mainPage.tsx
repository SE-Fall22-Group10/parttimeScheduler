import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import type {LoginProps, UserDetailsObject} from '../../interface';
import HomePage from '../homePage/HomePage';
import Login from '../login/Login';

const MainPage: React.FC = (): JSX.Element => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
	const [userData, setUserData] = useState<UserDetailsObject>(undefined);
	return (<>
		{isUserLoggedIn && userData ? <HomePage userData={userData} /> : <Login setIsUserLoggedIn={setIsUserLoggedIn} />}
	</>);
};

export default MainPage;
