import axios from 'axios';
import type {UserDetailsObject} from './interface';

export const verifyUserLogin = async (userEmail: string, password: string): Promise<UserDetailsObject | boolean> => {
	try {
		const result = await axios({method: 'POST', url: 'http://localhost:8080/login', params: {userEmail, password}});
		console.log(result);
		const user = result.data[0] as UserDetailsObject;
		return (user && user.password === password) ? user : false;
	} catch (error: unknown) {
		console.log('Error in login');
		return false;
	}
};
