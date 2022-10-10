export type LoginProps = {
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
	setUserData: (userData: UserDetailsObject) => void;
	setUserNotifications: (userNotifications: NotificationObject[]) => void;
	setRequestsForTakeUp: (requestsForTakeUp: RequestForTakeUpObject[]) => void;
};

export type MainPageProps = {
	userData: UserDetailsObject;
	userNotifications: NotificationObject[];
	requestForTakeUp: RequestForTakeUpObject[];
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
};

export type HomePageProps = {
	userData: UserDetailsObject;
	userNotifications: NotificationObject[];
	requestForTakeUp: RequestForTakeUpObject[];
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
	shifts: ShiftsPerWeek[];
};

export type ShiftsPerWeek = {
	weekNumber: number;
	shiftArray: ShiftObject[];
};

export type ShiftObject = {
	shiftFrom: Date;
	shiftTill: Date;
	storeName: string;
	shiftHours: number;
	shiftForGrabsStatus: string;
};

export type NotificationObject = {
	storeName: string;
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
	myShiftsForWeek: ShiftsPerWeek[];
	shiftsForGrabs: RequestForTakeUpObject[];
};

export type RequestForTakeUpObject = {
	offerer: string;
	grabbed: number;
	storeName: string;
	taker: string;
	weekNumber: number;
	shift: ShiftObject;
};

export type MyScheduleProps = {
	userData: UserDetailsObject;
};
