import React, {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {tradeShiftTypes} from '../../constants';
import type {ShiftObject, TradePlaceProps} from '../../interface';
import TradeList from '../tradeList/TradeList';

const TradePlace: React.FC<TradePlaceProps> = (props: TradePlaceProps): JSX.Element => {
	const [activeKey, setActiveKey] = useState<string>(tradeShiftTypes.offerUp);
	console.log(activeKey);

	return (
		<Tabs activeKey={activeKey} onSelect={key => {
			if (key !== null) {
				setActiveKey(key);
			}
		}}>
			<Tab title='OFFER UP' eventKey={tradeShiftTypes.offerUp}>
				<TradeList shiftsForTrade={{shifts: props.myShifts, tradeType: tradeShiftTypes.offerUp}} />
			</Tab>
			<Tab title='TAKE UP' eventKey={tradeShiftTypes.takeUp}>
				<TradeList shiftsForTrade={{shifts: props.shiftsForGrabs, tradeType: tradeShiftTypes.takeUp}} />
			</Tab>
		</Tabs>
	);
};

export default TradePlace;
