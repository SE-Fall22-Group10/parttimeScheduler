import type {UserDetailsObject} from './interface';
import axios from 'axios';

export const getUserAfterVerification = async (username: string, password: string): Promise<UserDetailsObject> => {
	const result = await axios({method: 'GET', url: 'http://localhost:3000/users', params: {username}});
	return result.data[0] as UserDetailsObject;
};
