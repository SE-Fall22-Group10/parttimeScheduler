import React, {useState} from 'react';
import {Container, Table} from 'react-bootstrap';
import type {HomePageProps, NotificationObject, ShiftObject} from '../../interface';
import {getTimeInHoursMinutesFromDate, getWeekNumber} from '../../utils';

const HomePage: React.FC<HomePageProps> = (props: HomePageProps): JSX.Element => {
	const [username, setUsername] = useState<string>('');

	const getUpcomingShifts = (): ShiftObject[] => {
		const currentDate = new Date();
		const currentWeekNumber = getWeekNumber(currentDate);
		const recentShifts = props.userData.shifts.filter(shift => shift.weekNumber >= currentWeekNumber && shift.weekNumber <= currentWeekNumber + 1);
		if (recentShifts) {
			const allShifts = recentShifts.map(shiftPerWk => shiftPerWk.shiftArray).flat();
			const sortedShifts = allShifts.sort((a, b) => a.shiftFrom.getTime() - b.shiftFrom.getTime());
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

	return (
		<>
			<Container className='tableUpcomingShifts' style={{width: '30%', minHeight: '30vh', maxHeight: '40vh', margin: '4%', display: 'block', overflowY: 'scroll', float: 'right'}}>
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
									{shift.shiftFrom.getDay()}, {getTimeInHoursMinutesFromDate(shift.shiftFrom)} to {getTimeInHoursMinutesFromDate(shift.shiftTill)}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>

			<Container className='tableNotifications' style={{width: '30%', minHeight: '30vh', maxHeight: '40vh', margin: '4%', display: 'block', overflowY: 'scroll'}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Notifications</th>
						</tr>
					</thead>
					<tbody>
						{
							props.userNotifications.map((notif: NotificationObject) => (
								<tr key={notif.notificationId}>
									<td>{notif.message}</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</Container>

			<Container className='tableHoursScheduled' style={{width: '30%', minHeight: '30vh', maxHeight: '40vh', margin: '4%', display: 'block', float: 'right'}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Hours Scheduled</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{getScheduledHoursForWeek()}</td>
						</tr>
					</tbody>
				</Table>
			</Container>

			<Container className='tablePendingApprovals' style={{width: '30%', minHeight: '30vh', maxHeight: '40vh', margin: '5% 4%', display: 'block', overflowY: 'scroll'}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Pending Approvals</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Shift has not been picked up</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</>
	);
};

export default HomePage;
