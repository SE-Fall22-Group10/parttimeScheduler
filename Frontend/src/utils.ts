import axios from 'axios';
import {getUser} from './apiCalls';
import type {UserDetailsObject} from './interface';

export const verifyUserLogin = async (userEmail: string, password: string): Promise<UserDetailsObject | boolean> => {
	try {
		const user = await getUser(userEmail);
		return (user && user.password === password) ? user : false;
	} catch (error: unknown) {
		console.log('Error in login');
		return false;
	}
};
