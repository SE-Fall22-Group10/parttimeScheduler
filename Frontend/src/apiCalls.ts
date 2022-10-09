import type {NotificationObject, UserDetailsObject} from './interface';
import axios from 'axios';

export const getUser = async (userEmail: string, password: string): Promise<UserDetailsObject | boolean> => {
	// Const result = await axios({method: 'GET', url: 'http://localhost:3000/users', params: {userEmail}});
	try {
		const result = await axios({method: 'POST', url: 'http://localhost:8080/login', data: {email: userEmail, password}, responseType: 'json'});
		console.log(result.data);
		return result.data as UserDetailsObject;
	} catch (e: unknown) {
		console.log(e);
		return false;
	}
};

export const getNotifications = async (userEmail: string): Promise<NotificationObject[]> => {
	try {
		const result = await axios({method: 'GET', url: 'http://localhost:3000/notifications', params: {userEmail}});
		return result.data as NotificationObject[];
	} catch (e: unknown) {
		console.log('Error in getting notifications');
		return [];
	}
};
