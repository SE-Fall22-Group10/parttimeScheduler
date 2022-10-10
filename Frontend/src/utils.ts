import axios from 'axios';
import {getUser} from './apiCalls';
import type {ShiftsPerWeek, UserDetailsObject} from './interface';

export const getTimeInHoursMinutesFromDate = (date: Date): string => {
	const hrs = date.getHours();
	const mins = date.getMinutes();
	const amPm = hrs >= 12 ? 'PM' : 'AM';
	const finalHrs = amPm === 'PM' ? hrs - 12 : hrs;
	const hrsCheck0 = finalHrs === 0 ? 12 : hrs;
	return (hrsCheck0 > 10 ? hrsCheck0.toString() : '0' + hrsCheck0.toString()) + ':' + (mins > 10 ? mins.toString() : '0' + mins.toString()) + ' ' + amPm;
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

export const getUniqueStoresForEmployee = (userData: UserDetailsObject): string[] => {
	const shifts = userData.shifts.map((shftPrWk: ShiftsPerWeek) => (shftPrWk.shiftArray)).flat();
	const stores = shifts.map(shift => shift.storeName);
	const uniqueStrings = stores.filter((x, i, a) => a.indexOf(x) === i);
	return uniqueStrings;
};

export const getDayNameFromDate = (date: Date): string => {
	const d = date.getDay();
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return days[d];
};

export const getWeekRangeForWeek = (week: number, year: number): string => {
	const value = new Date(year, 0, 1 + ((week - 1) * 7));
	const dow = value.getDay();
	const weekStart = value;
	if (dow <= 4) {
		weekStart.setDate(value.getDate() - value.getDay() + 1);
	} else {
		weekStart.setDate(value.getDate() + 8 - value.getDay());
	}

	const weekEnd = new Date(weekStart.getDate() + 6);

	return getDateStringFromDate(weekStart) + ' - ' + getDateStringFromDate(weekEnd);
};
