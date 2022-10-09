import React, {useState} from 'react';
import {pageNames} from '../../constants';
import type {LoginProps, UserDetailsObject} from '../../interface';
import MainPage from '../mainPage/MainPage';
import Login from '../login/Login';

const LandingPage: React.FC = (): JSX.Element => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
	const [userData, setUserData] = useState<UserDetailsObject>();

	return (<>
		{isUserLoggedIn && userData
			? <MainPage userData={userData} setIsUserLoggedIn={setIsUserLoggedIn} />
			:	<Login setIsUserLoggedIn={setIsUserLoggedIn} setUserData={setUserData} />}
	</>);
};

export default LandingPage;
