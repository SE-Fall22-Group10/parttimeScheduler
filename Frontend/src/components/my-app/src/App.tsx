import React from 'react';
import './App.css';
import MainPage from './components/MyShift/Display_Shifts';
import { mainProps } from './interface';
import { Shift } from './interface';
import { useState } from 'react';


const App = () => {
  
  
  const [shift_input, setIsUserLoggedIn] = useState<Shift[]>(
    [

      {shiftID: 12,
        shiftStart: new Date("2022-10-11T10:00:00.000"),
        shiftEnd: new Date("2022-10-11T17:00:00.000"),
        storeName: "Jason Deli",
      },
      {shiftID: 53,
        shiftStart: new Date("2022-10-13T12:00:00.000"),
        shiftEnd: new Date("2022-10-13T14:00:00.000"),
        storeName: "Oval",
      },
      {shiftID: 49,
        shiftStart: new Date("2022-10-14T06:30:00.000"),
        shiftEnd: new Date("2022-10-14T08:30:00.000"),
        storeName: "Oval",
      },
      {shiftID: 98,
        shiftStart: new Date("2022-10-16T06:30:00.000"),
        shiftEnd: new Date("2022-10-16T08:30:00.000"),
        storeName: "WellRec",
      }
    ]);

  return (
    <>
    <div className="App">
      <MainPage ShiftInput={shift_input}/>n
    </div>
    </>
  );
}

export default App;


/*

      - create input for store
      - check week no logic
      - add dynamic date next to day names
      - remove time column
      - add multiple shift cell under each day
      - under store handle multiple shifts on same day

      [new Set(shift_input.map(shift => shift.storeName))].map((s) => 
               
                  <Dropdown.Item > {s} </Dropdown.Item>
                
              )
      shift_input.map(((shift) => 
              <Dropdown.Item key={shift.shiftID}> {shift.storeName} </Dropdown.Item>
              ))

      {getDayName(shift.shiftStart)} {shift.shiftStart.getDate()}/{shift.shiftStart.getMonth()+1}/{shift.shiftStart.getFullYear()}
      {getStoreName(shift)} {shift.shiftStart.getHours()+4}:{shift.shiftStart.getMinutes()}-{shift.shiftEnd.getHours()+4}:{shift.shiftEnd.getMinutes()}
*/