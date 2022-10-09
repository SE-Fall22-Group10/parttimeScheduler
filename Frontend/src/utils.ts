import axios from 'axios';
import {getUser} from './apiCalls';
import type {UserDetailsObject} from './interface';

export const getTimeInHoursMinutesFromDate = (date: Date): string => {
	const hrs = date.getHours();
	const mins = date.getMinutes();
	const amPm = hrs >= 12 ? 'PM' : 'AM';
	const finalHrs = amPm === 'PM' ? hrs - 12 : hrs;
	const hrsCheck0 = finalHrs === 0 ? 12 : hrs;
	return hrsCheck0.toString() + ':' + mins.toString() + ' ' + amPm;
};
