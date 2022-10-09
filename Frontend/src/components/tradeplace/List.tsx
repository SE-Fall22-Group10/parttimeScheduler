import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { ListvalueProps, ShiftsList, Shiftsobject } from '../../interface';

const Lists = (shifts: ListvalueProps): JSX.Element => {
  /* const [filteredshifts, setfilteredshifts] = useState<Shiftsobject[]>(
    shifts.listobject
  );
  const updateshiftsforstore = (storeName: string) => {
    const newList;
  };*/
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
        {shifts.listobject
          .filter((data) => data.storename === 'Jasons')
          .map((e: Shiftsobject, idx: number) => {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{e.shiftstart.toLocaleDateString()}</td>
                <td>
                  {e.shiftstart.toLocaleTimeString()}-
                  {e.shiftend.toLocaleTimeString()}
                </td>
                <td>{e.storename}</td>
                <td>
                  <Button variant="info">{shifts.type}</Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
export default Lists;
