export type LoginProps = {
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
	setUserData: (userData: UserDetailsObject) => void;
};

export type HomePageProps = {
	userData: UserDetailsObject;
};

export type UserDetailsObject = {
	username: string;
	userEmail: string;
	password: string;
	userRole: string;
	shifts: Shift[];
};

export type Shift = {
	shiftID: number;
	shiftStart: string;
	shiftEnd: string;
	storeName: string;
};
