import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import Lists from './lists';
import React from 'react';
import {
  ShiftsList,
  Shiftsobject,
  ListvalueProps,
  Tradebookprops,
} from '../../interface';

import NavigationBar from '../navigationBar/NavigationBar';

const dummylist = [
  {
    ShiftId: 23322,
    shiftstart: new Date(),
    shiftend: new Date(new Date().getTime() + 3600000),
    storename: 'Jasons',
  },
  {
    ShiftId: 231312321,
    shiftstart: new Date(),
    shiftend: new Date(new Date().getTime() + 3600000),
    storename: 'wellness',
  },
  {
    ShiftId: 56456456,
    shiftstart: new Date(),
    shiftend: new Date(new Date().getTime() + 5400000),
    storename: 'Jasons',
  },
  {
    ShiftId: 5433,
    shiftstart: new Date(),
    shiftend: new Date(new Date().getTime() + 7200000),
    storename: 'wellness',
  },
];
const Tradebook = (propslist: Tradebookprops): JSX.Element => {
  //const [listvar, setListValues] = useState<Tradebookprops>;
  const handleSelect = (eventKey: any) => {
    //const [l ,setlistValueProp] = useState<ListvalueProps>()
    const d: ListvalueProps = { listobject: dummylist, type: eventKey };
    propslist.setlistValueProps(d);
    alert(`eventKey is set to ` + eventKey);
  };
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Tabs onSelect={handleSelect}>
          <Tab eventKey="offer" title="OFFER UP" id="offer">
            <Lists listobject={dummylist} type={'offer'} />
          </Tab>
          <Tab eventKey="takeup" title="TAKE UP SHIFTS" id="takeup">
            <Lists listobject={dummylist} type={'takeup'} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Tradebook;
