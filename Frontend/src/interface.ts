export type LoginProps = {
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
	setUserData: (userData: UserDetailsObject) => void;
};

export type MainPageProps = {
	userData: UserDetailsObject;
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
};

export type HomePageProps = {
	userData: UserDetailsObject;
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
	shifts: Shift[];
};

export type Shift = {
	shiftID: number;
	shiftStart: string;
	shiftEnd: string;
	storeName: string;
};
