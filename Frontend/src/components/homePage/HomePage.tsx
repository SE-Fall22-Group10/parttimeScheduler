import React, {useState} from 'react';
import {Container, Table} from 'react-bootstrap';
import type {HomePageProps, NotificationObject, RequestForTakeUpObject, ShiftObject} from '../../interface';
import {getDateStringFromDate, getDayNameFromDate, getTimeInHoursMinutesFromDate, getWeekNumber} from '../../utils';

const HomePage: React.FC<HomePageProps> = (props: HomePageProps): JSX.Element => {
	const [username, setUsername] = useState<string>('');
	const getUpcomingShifts = (): ShiftObject[] => {
		const currentDate = new Date();
		const currentWeekNumber = getWeekNumber(currentDate);
		const recentShifts = props.userData.shifts.filter(shift => shift.weekNumber >= currentWeekNumber && shift.weekNumber <= currentWeekNumber + 1);
		if (recentShifts) {
			const allShifts = recentShifts.map(shiftPerWk => shiftPerWk.shiftArray).flat();
			const sortedShifts = allShifts.sort((a, b) => new Date(a.shiftFrom).getTime() - new Date(b.shiftFrom).getTime());
			return sortedShifts;
		}

		return [];
	};

	const getScheduledHoursForWeek = (): number => {
		const currentDate = new Date();
		const currentWeekNumber = getWeekNumber(currentDate);
		const weekShifts = props.userData.shifts.filter(shift => shift.weekNumber === currentWeekNumber);
		if (weekShifts) {
			const allShifts = weekShifts.map(shiftPerWk => shiftPerWk.shiftArray).flat();
			const hrs = allShifts.map(shift => shift.shiftHours);
			return hrs.reduce<number>((acc, curr) => acc + curr, 0);
		}

		return 0;
	};

	const getUnGrabbedRequests = () => {
		const ungrabbedRequests = props.requestForTakeUp.filter(request => request.grabbed === 0);
		return ungrabbedRequests;
	};

	return (
		<>
			<Container className='tableUpcomingShifts' style={{width: '35%', minHeight: '30vh', maxHeight: '40vh', margin: '4%', display: 'block', overflowY: 'scroll', float: 'right'}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Upcoming Shifts</th>
						</tr>
					</thead>
					<tbody>
						{getUpcomingShifts().map((shift: ShiftObject, idx: number) => (
							<tr key={idx}>
								<td>
									{getDayNameFromDate(new Date(shift.shiftFrom))} | {getDateStringFromDate(new Date(shift.shiftFrom))}, {getTimeInHoursMinutesFromDate(new Date(shift.shiftFrom))} to {getTimeInHoursMinutesFromDate(new Date(shift.shiftTill))}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>

			<Container className='tableNotifications' style={{width: '35%', minHeight: '30vh', maxHeight: '40vh', margin: '4%', display: 'block', overflowY: 'scroll'}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Notifications</th>
						</tr>
					</thead>
					<tbody>
						{props.userNotifications.length > 0
							? props.userNotifications.map((notif: NotificationObject, idx: number) => (
								<tr key={idx}>
									<td>{notif.message} <i>({notif.storeName})</i></td>
								</tr>
							))
							:	<tr>No new notifications at this time.</tr>
						}
					</tbody>
				</Table>
			</Container>

			<Container className='tableHoursScheduled' style={{width: '35%', minHeight: '30vh', maxHeight: '40vh', margin: '4%', display: 'block', float: 'right'}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Hours Scheduled for This Week</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{getScheduledHoursForWeek()}</td>
						</tr>
					</tbody>
				</Table>
			</Container>

			<Container className='tablePendingRequests' style={{width: '35%', minHeight: '30vh', maxHeight: '40vh', margin: '5% 4%', display: 'block', overflowY: 'scroll'}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Pending Requests</th>
						</tr>
					</thead>
					<tbody>
						{
							getUnGrabbedRequests().length > 0
								? getUnGrabbedRequests().map((request: RequestForTakeUpObject, idx: number) => (
									<tr key={idx}>
										<td>{request.offerer} has offered their shift for grabs <i>({request.storeName})</i></td>
									</tr>
								))
								: <tr>No pending requests at this time.</tr>
						}
					</tbody>
				</Table>
			</Container>
		</>
	);
};

export default HomePage;
