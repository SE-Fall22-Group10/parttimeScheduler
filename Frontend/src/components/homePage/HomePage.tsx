import React, {useState} from 'react';
import {Container, Table} from 'react-bootstrap';
import type {HomePageProps, NotificationObject, ShiftObject} from '../../interface';

const HomePage: React.FC<HomePageProps> = (props: HomePageProps): JSX.Element => {
	const [username, setUsername] = useState<string>('');
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
						{props.userData.shifts.map((shift: ShiftObject, idx: number) => (
							<tr key={idx}>
								<td>
									{shift.shiftStart} - {shift.shiftEnd}
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

			<Container className='tableHoursScheduled' style={{width: '30%', minHeight: '30vh', maxHeight: '40vh', margin: '4%', display: 'block', overflowY: 'scroll', float: 'right'}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Hours Scheduled</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Shift has not been picked up</td>
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
