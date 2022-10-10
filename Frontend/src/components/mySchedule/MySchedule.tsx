import React, {useState} from 'react';
import {Col, Container, Row, Table, ButtonGroup, Button} from 'react-bootstrap';
import type {MyScheduleProps, ShiftObject} from '../../interface';
import {getDateStringFromDate, getTimeInHoursMinutesFromDate, getWeekNumber} from '../../utils';

const MySchedule: React.FC<MyScheduleProps> = (props: MyScheduleProps): JSX.Element => {
	const [weekNumber, setWeekNumber] = useState<number>(getWeekNumber(new Date()));

	const getShiftsForWeek = (wkNo: number): ShiftObject[] => {
		const shiftsForWk = props.userData.shifts.filter(shtForWk => shtForWk.weekNumber === wkNo);
		if (shiftsForWk) {
			const shifts = shiftsForWk.map(s => (s.shiftArray)).flat();
			const sortedShifts = shifts.sort((a, b) => a.shiftFrom.getTime() - b.shiftFrom.getTime());
			return sortedShifts;
		}

		return [];
	};

	return (
		<>
			<Container>
				<ButtonGroup>
					<Button variant='secondary' onClick={() => {
						setWeekNumber(weekNumber - 1);
					}}>-</Button>
					<Button variant='secondary' onClick={() => {
						setWeekNumber(getWeekNumber(new Date()));
					}}>Current Week</Button>
					<Button variant='secondary' onClick={() => {
						setWeekNumber(weekNumber + 1);
					}}>+</Button>
				</ButtonGroup>
				<Table>
					<Row>
						{getShiftsForWeek(weekNumber).map((s: ShiftObject, idx: number) => (<Col key={idx}>{s.shiftFrom.getDay()}, {getDateStringFromDate(s.shiftFrom)}</Col>),
						)}
					</Row>
					<Row>
						{getShiftsForWeek(weekNumber).map((s: ShiftObject, idx: number) => (<Col key={idx}>{getTimeInHoursMinutesFromDate(s.shiftFrom)}, {getTimeInHoursMinutesFromDate(s.shiftTill)}</Col>),
						)}
					</Row>
				</Table>
			</Container>
		</>
	);
};

export default MySchedule;
