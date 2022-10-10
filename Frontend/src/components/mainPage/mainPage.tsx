import React, {useState} from 'react';
import {pageNames} from '../../constants';
import type {MainPageProps, UserDetailsObject} from '../../interface';
import HomePage from '../homePage/HomePage';
import MySchedule from '../mySchedule/MySchedule';
import NavigationBar from '../navigationBar/NavigationBar';
import TradePlace from '../tradePlace/TradePlace';

const MainPage: React.FC<MainPageProps> = (props: MainPageProps): JSX.Element => {
	const [activePage, setActivePage] = useState<string>(pageNames.home);

	const getActiveComponentAfterLogin = (pgName: string, userData: UserDetailsObject) => {
		let resultComponent = null;
		switch (pgName) {
			case pageNames.home:
				resultComponent = <HomePage userData={props.userData} userNotifications={props.userNotifications} requestForTakeUp={props.requestForTakeUp} setActivePage={setActivePage} />;
				break;
			case pageNames.mySchedule:
				resultComponent = <MySchedule userData={props.userData} />;
				break;
			// Case pageNames.workPlace:
			// 	resultComponent = <div>Work Place</div>;
			// 	break;
			case pageNames.tradePlace:
				resultComponent = <TradePlace myShiftsForWeek={props.userData.shifts} shiftsForGrabs={props.requestForTakeUp} />;
				break;
			case pageNames.manage:
				resultComponent = <div>Manage</div>;
				break;
			default:
				resultComponent = <div>Oops this page does not exist</div>;
		}

		return resultComponent;
	};

	return (
		<>
			<NavigationBar userData={props.userData} setIsUserLoggedIn={props.setIsUserLoggedIn} setActivePage={setActivePage} />
			{getActiveComponentAfterLogin(activePage, props.userData)}
		</>
	);
};

export default MainPage;
