export type LoginProps = {
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
	setUserData: (userData: UserDetailsObject) => void;
	setUserNotifications: (userNotifications: NotificationObject[]) => void;
};

export type MainPageProps = {
	userData: UserDetailsObject;
	userNotifications: NotificationObject[];
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
};

export type HomePageProps = {
	userData: UserDetailsObject;
	userNotifications: NotificationObject[];
	setActivePage: (pageName: string) => void;
};

export type MenuProps = {
	userData: UserDetailsObject;
	setActivePage: (sectionName: string) => void;
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
};

export type UserDetailsObject = {
	name: string;
	email: string;
	password: string;
	role: string;
	shifts: ShiftObject[];
};

export type ShiftObject = {
	shiftId: number;
	shiftFrom: Date;
	shiftEnd: Date;
	storeName: string;
	shiftToggle: number;
	weekNumber: number;
};

export type NotificationObject = {

	notificationId: number;
	receiver: string;
	notificationDate: string;
	message: string;

};

export type TradeListObject = {
	shifts: ShiftObject[] ;
	tradeType: string;
};

export type TradeListProps = {
	shiftsForTrade: TradeListObject;
};

export type TradePlaceProps = {
	myShifts: ShiftObject[];
	shiftsForGrabs: ShiftObject[];
};
