export type mainProps = {
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
	shiftStart: Date;
	shiftEnd: Date;
	storeName: string;
    // weekNumber: number;
};