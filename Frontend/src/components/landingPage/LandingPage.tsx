import React, {useState} from 'react';
import {pageNames} from '../../constants';
import type {LoginProps, NotificationObject, RequestForTakeUpObject, UserDetailsObject} from '../../interface';
import MainPage from '../mainPage/MainPage';
import Login from '../login/Login';

const LandingPage: React.FC = (): JSX.Element => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
	const [userData, setUserData] = useState<UserDetailsObject>();
	const [userNotifications, setUserNotificaions] = useState<NotificationObject[]>([]);
	const [requestsForTakeUp, setRequestsForTakeUp] = useState<RequestForTakeUpObject[]>([]);

	return (<>
		{isUserLoggedIn && userData
			? <MainPage userData={userData} userNotifications={userNotifications} requestForTakeUp={requestsForTakeUp} setIsUserLoggedIn={setIsUserLoggedIn} />
			:	<Login setIsUserLoggedIn={setIsUserLoggedIn} setUserData={setUserData} setUserNotifications={setUserNotificaions} setRequestsForTakeUp = {setRequestsForTakeUp} />}
	</>);
};

export default LandingPage;
