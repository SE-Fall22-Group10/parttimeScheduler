import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import type {ShiftObject, TradeListProps} from '../../interface';
import {getTimeInHoursMinutesFromDate} from '../../utils';

const TradeList = (props: TradeListProps): JSX.Element => {
	console.log('Trade List');
	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th>Sr. No.</th>
					<th>Date</th>
					<th>Time</th>
					<th>Location</th>
					<th> Action</th>
				</tr>
			</thead>
			<tbody>
				{props.shiftsForTrade.shifts
					.filter(shift => shift.storeName === 'Jasons')
					.map((shift: ShiftObject, idx: number) => (
						<tr key={idx}>
							<td>{idx + 1}</td>
							<td>{shift.shiftFrom.toLocaleDateString()}</td>
							<td>
								{getTimeInHoursMinutesFromDate(shift.shiftFrom)}-
								{getTimeInHoursMinutesFromDate(shift.shiftTill)}
							</td>
							<td>{shift.storeName}</td>
							<td>
								<Button variant='info'>{props.shiftsForTrade.tradeType}</Button>
							</td>
						</tr>
					))}
			</tbody>
		</Table>
	);
};

export default TradeList;
