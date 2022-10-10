import React, {useState} from 'react';
import {Col, Container, Row, Table, ButtonGroup, Button} from 'react-bootstrap';
import type {MyScheduleProps, ShiftObject} from '../../interface';
import {getDateStringFromDate, getDayNameFromDate, getTimeInHoursMinutesFromDate, getWeekNumber, getWeekRangeForWeek} from '../../utils';

const MySchedule: React.FC<MyScheduleProps> = (props: MyScheduleProps): JSX.Element => {
	const [weekNumber, setWeekNumber] = useState<number>(getWeekNumber(new Date()));

	const getShiftsForWeek = (wkNo: number): ShiftObject[] => {
		const shiftsForWk = props.userData.shifts.filter(shtForWk => shtForWk.weekNumber === wkNo);
		if (shiftsForWk) {
			const shifts = shiftsForWk.map(s => (s.shiftArray)).flat();
			const sortedShifts = shifts.sort((a, b) => new Date(a.shiftFrom).getTime() - new Date(b.shiftFrom).getTime());
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
				<div style={{marginTop: '3%'}}>{getWeekRangeForWeek(weekNumber, new Date().getFullYear())}</div>
				<Table striped bordered hover style={{marginTop: '4%'}}>
					<Row>
						{getShiftsForWeek(weekNumber).map((s: ShiftObject, idx: number) => (<Col key={idx}><b>{getDayNameFromDate(new Date(s.shiftFrom))}, {getDateStringFromDate(new Date(s.shiftFrom))}</b></Col>),
						)}
					</Row>
					<Row>
						{getShiftsForWeek(weekNumber).map((s: ShiftObject, idx: number) => (<Col key={idx}>{getTimeInHoursMinutesFromDate(new Date(s.shiftFrom))} to {getTimeInHoursMinutesFromDate(new Date(s.shiftTill))}</Col>),
						)}
					</Row>
				</Table>
			</Container>
		</>
	);
};

export default MySchedule;
