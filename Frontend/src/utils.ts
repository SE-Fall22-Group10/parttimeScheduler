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

export const getDateStringFromDate = (date: Date): string => {
	const dd = date.getDate();
	const mm = date.getMonth() + 1;
	const yyyy = date.getFullYear();
	return mm.toString() + '/' + dd.toString() + '/' + yyyy.toString();
};

export const getWeekNumber = (date: Date): number => {
	// eslint-disable-next-line no-bitwise
	const weekNumber = (4 * date.getMonth()) + (~~(date.getDate() / 7)) + 1;
	return weekNumber;
};
