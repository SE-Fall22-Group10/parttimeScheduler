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
	username: string;
	userEmail: string;
	password: string;
	userRole: string;
	shifts: ShiftObject[];
};

export type ShiftObject = {
	shiftID: number;
	shiftStart: string;
	shiftEnd: string;
	storeName: string;
};

export type NotificationObject = {

	notificationId: number;
	receiver: string;
	notificationDate: string;
	message: string;

};

// Export type ShiftsList = {
//     listobject:Shiftsobject[];
// };
// export type Shiftsobject= {
//     ShiftId: number;
//     shiftstart : Date;
//     shiftend : Date;
//     storename: string;
// };

// export type ListvalueProps ={
//     listobject: Shiftsobject[] ;
//     type : string;
// };
// export type Tradebookprops={
//     setlistValueProps : (listobject123:ListvalueProps) => void;
// };
