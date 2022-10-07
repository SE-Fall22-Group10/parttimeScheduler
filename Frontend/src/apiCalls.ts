import type {UserDetailsObject} from './interface';
import axios from 'axios';

export const getUser = async (userEmail: string): Promise<UserDetailsObject> => {
	const result = await axios({method: 'GET', url: 'http://localhost:3000/users', params: {userEmail}});
	return result.data[0] as UserDetailsObject;
};
