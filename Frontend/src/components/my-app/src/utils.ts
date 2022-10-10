import axios from 'axios';
import type {UserDetailsObject} from './interface';

export const getUser = async (userEmail: string, password: string): Promise<UserDetailsObject | boolean> => {
	try {
		const result = await axios({method: 'GET', url: 'http://localhost:3000/users', params: {userEmail}});
		const user = result.data[0] as UserDetailsObject;
		return (user && user.password === password) ? user : false;
	} catch (error: unknown) {
		console.log('Error in login');
		return false;
	}
};