import React, {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {tradeShiftTypes} from '../../constants';
import type {ShiftObject, TradePlaceProps} from '../../interface';
import {getUniqueStoresForEmployee} from '../../utils';
import TradeList from '../tradeList/TradeList';
import Dropdown from 'react-bootstrap/Dropdown';

const TradePlace: React.FC<TradePlaceProps> = (props: TradePlaceProps): JSX.Element => {
	const [activeKey, setActiveKey] = useState<string>(tradeShiftTypes.offerUp);
	console.log(activeKey);

	const convertShiftsPerWeekToShift = () => {
		const shiftsForWeek = props.myShiftsForWeek.map(shiftPerWeek => shiftPerWeek.shiftArray).flat();
		return shiftsForWeek;
	};

	const convertRequestsToShift = () => {
		const shift = props.shiftsForGrabs.filter(grabShifts => grabShifts.grabbed === 0);
		if (shift) {
			const shiftFiltered = shift.map(sh => (
				sh.shift
			));
			return shiftFiltered;
		}

		return [];
	};

	const uniqueStores = getUniqueStoresForEmployee(props.userData);
	const [selectedStore, setSelectedStore] = useState<string>(uniqueStores[0]);

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle variant='success' id='dropdown-basic'>
        Store Name
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{uniqueStores.map((store, idx) => (<Dropdown.Item key={idx} onClick={() => {
						setSelectedStore(store);
					}}>{store}</Dropdown.Item>))}
				</Dropdown.Menu>
			</Dropdown>
			<Tabs activeKey={activeKey} onSelect={key => {
				if (key !== null) {
					setActiveKey(key);
				}
			}}>
				<Tab title='OFFER UP' eventKey={tradeShiftTypes.offerUp}>
					<TradeList selectedStore={selectedStore} shiftsForTrade={{shifts: convertShiftsPerWeekToShift(), tradeType: tradeShiftTypes.offerUp}} />
				</Tab>
				<Tab title='TAKE UP' eventKey={tradeShiftTypes.takeUp}>
					<TradeList selectedStore={selectedStore} shiftsForTrade={{shifts: convertRequestsToShift(), tradeType: tradeShiftTypes.takeUp}} />
				</Tab>
			</Tabs>
		</>
	);
};

export default TradePlace;
