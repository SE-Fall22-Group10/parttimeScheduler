import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import type {ShiftObject, TradeListProps} from '../../interface';
import {getTimeInHoursMinutesFromDate} from '../../utils';
import {tradeShiftTypes} from '../../constants';
import {offerShiftApi} from '../../apiCalls';

const TradeList = (props: TradeListProps): JSX.Element => {
	console.log('hi');
	console.log(props);
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
					.filter(shift => shift.storeName === props.selectedStore)
					.map((shift: ShiftObject, idx: number) => (
						<tr key={idx}>
							<td>{idx + 1}</td>
							<td>{new Date(shift.shiftFrom).toLocaleDateString()}</td>
							<td>
								{getTimeInHoursMinutesFromDate(new Date(shift.shiftFrom))}-
								{getTimeInHoursMinutesFromDate(new Date(shift.shiftTill))}
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
