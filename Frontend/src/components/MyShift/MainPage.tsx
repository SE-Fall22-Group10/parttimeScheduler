import React, {useState} from 'react';
import Navbar from '../navbar/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BasicButtonExample from '../../Dropdown';
import {Container, Table} from 'react-bootstrap';
import { Shift, UserDetailsObject } from '../../interface';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { mainProps } from '../../interface';
import { getUser } from '../../utils';

const MainPage: React.FC = (): JSX.Element => {
	
    const [data, setData] = useState([
        {  Time_Name: "6AM - 7AM", Monday: "WellRec", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "WellRec" },
        { Time_Name: "7AM - 8AM", Monday: "WellRec", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "WellRec" },
        { Time_Name: "8AM - 9AM", Monday: "--", Tuesday: "Jason Dally", Wednesday: "--", Thursday: "--", Friday: "WellRec", Saturday: "--", Sunday: "WellRec" },
        { Time_Name: "9AM - 10AM", Monday: "--", Tuesday: "Jason Dally", Wednesday: "Jason Dally", Thursday: "--", Friday: "WellRec", Saturday: "--", Sunday: "--" },
        { Time_Name: "10AM - 11AM", Monday: "--", Tuesday: "--", Wednesday: "Jason Dally", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "--" }
      ]);
    
      const [Testing, setTesting] = useState("Work Place")
      const handleClick = (e:any) => {
        // console.log(e)
        setTesting(e.target.text)
        setData([
          {Time_Name: "Ankur", Monday: "--", Tuesday: "2PM - 4PM", Wednesday: "10AM - 1PM", Thursday: "--", Friday: "2PM - 4PM", Saturday: "--", Sunday: "--" },
          {Time_Name: "Prasad", Monday: "6AM - 8AM", Tuesday: "--", Wednesday: "10AM - 4PM", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "2PM - 7PM" },
          {Time_Name: "Numair", Monday: "--", Tuesday: "9AM - 4PM", Wednesday: "--", Thursday: "8PM - 10PM", Friday: "--", Saturday: "6AM - 8AM", Sunday: "--" },
          {Time_Name: "Aditya", Monday: "--", Tuesday: "--", Wednesday: "10AM - 7PM", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "10AM - 7PM" },
          {Time_Name: "Mohit", Monday: "8AM - 11AM", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "8AM - 11AM", Saturday: "--", Sunday: "--" }
        ]);
      }
    
      const handleClick2 = (e:any) => {
        // console.log(e)
        setTesting(e.target.text)
        setData([
          {Time_Name: "Ankur", Monday: "6AM - 8AM", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "6AM - 9AM" },
          {Time_Name: "Tushar", Monday: "6AM - 9AM", Tuesday: "--", Wednesday: "--", Thursday: "10AM - 6PM", Friday: "--", Saturday: "--", Sunday: "--" },
          {Time_Name: "Michael", Monday: "--", Tuesday: "5AM - 8PM", Wednesday: "--", Thursday: "8PM - 11PM", Friday: "--", Saturday: "5AM - 8AM", Sunday: "--" },
          {Time_Name: "Kaushik", Monday: "--", Tuesday: "3PM - 8PM", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "4PM - 9PM" },
          {Time_Name: "Arjun", Monday: "8AM - 11AM", Tuesday: "--", Wednesday: "12PM - 8PM", Thursday: "--", Friday: "10AM - 3PM", Saturday: "--", Sunday: "--" }
        ]);
      }
    
      const handleClick3 = (e:any) => {

        const results = shift_input.filter(shift => {
          return shift.storeName == e.target.text;
        });

        console.log(result)
        
      }
      
      {/*Actual Data*/}
      const [shift_input, setShift]  = useState<Shift[]>([
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
      ])


      // const user: UserDetailsObject = [
      //   {
      //     username: "ABC",
	    //     userEmail: "abc@ncsu.edu",
	    //     password: "pass123",
	    //     userRole: "employee",
	    //     shifts: shift_input
      //   },
      //   {
      //     username: "DEF",
      //     userEmail: "def@ncsu.edu",
      //     password: "dontpass",
      //     userRole: "employee",
      //     shifts: shift_input2
      //   }
      // ]
    
      const just_date = new Date("2022-10-11T17:30:00.000Z");
      const date = `${just_date.getDate()}/${just_date.getMonth()+1}/${just_date.getFullYear()}`;
      
      function getDayName(dateStr:any, locale:any = "en-us") {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
      }
    
      function getStoreName(shift:any) {
        var sname = shift.storeName;
        return sname;
      }
    
      const S = Array.from(shift_input);
    
      //const cats = shift_input.map(q => q.storeName)
      // console.log(just_date.getHours()+4)
    
      // getDayName(just_date);
      // shift_input.map((key, val) => {
      //   return(
      //     <p key={`${key.shiftID}}`}>
      //           {getDayName(key.shiftStart)} - `${key.shiftStart.getDate()}/${key.shiftStart.getMonth()+1}/${key.shiftStart.getFullYear()}`
      //     </p>
      //   )
      // })
    
    
      const result = [new Set(shift_input.map(shift => shift.storeName))];
      const result2 = Array.from(result[0]);
    
      const getdate = [new Set(shift_input.map(shift => shift.shiftStart.toDateString()))];
      const [getdate2, setGetdate2] = useState(Array.from(getdate[0]));
      
      // THE CODE BELOW CODE TRIES TO GROUP THE OBJECTS
      // const cats = S.reduce((shift, { shiftStart , shiftEnd , storeName, sid }) => {
      //   (sid = sid || []).push(shiftStart.toString().slice(12, 20)+shiftEnd.toString().slice(12, 20)+storeName);
      //   return shift;
      // }, {});
      // console.log(cats);

	return (
		<>
    <Container>
      <Navbar/>
    </Container>

    <Container>
      <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" title="Work Place" href="#">My Shift</Button>
            <DropdownButton id="dropdown-basic-button" title={Testing}>
              {/* <Dropdown.Item value="Jason Deli" href="#/action-2" onClick={(e) => {handleClick(e)}}>Jason Dally</Dropdown.Item>
              <Dropdown.Item value="WellRec" href="#/action-3" onClick={(e) => {handleClick2(e)}}>Wellrec</Dropdown.Item> */}
              {
                result2.map((res) => {
                  return (
                    <Dropdown.Item value={res} onClick={(e) => {handleClick3(e)}}> {res} </Dropdown.Item>
                  )
                })
              }
            </DropdownButton>
            <Button variant="secondary">Trade</Button>
          </ButtonGroup>
      </Container>
      
      <Container>
      <br></br>
      <h3>ALL SHIFTS</h3>
      <br></br>
        <Table striped bordered hover>
          <tbody>
          {/* <tbody> */}

            {/* <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}> */}
              <tr>
                {
                  getdate2.map((dt) => {
                    return(
                      <td><b>{dt}</b></td>
                    )
                  })
                }
              </tr>
              <tr>
              {
                  shift_input.map((shift) => {
                    return(
                      <td>{getStoreName(shift)} {shift.shiftStart.toTimeString().slice(0, 8)}-{shift.shiftEnd.toTimeString().slice(0, 8)}</td>
                    )
                  })
                }
              </tr>
              {/* <tr>
                {
                  const namevar = ""
                  shift_input.filter((data) => data.shiftStart.getUTCDay() === 2).forEach(
                    function (element) {
                      
                        <td>{getStoreName(element)} {element.shiftStart.toTimeString().slice(0, 8)}-{element.shiftEnd.toTimeString().slice(0, 8)}</td>
                    
                    }
                  )
                  // map((shift) => {
                  //   return(
                  //     <td>{getStoreName(shift)} {shift.shiftStart.toTimeString().slice(0, 8)}-{shift.shiftEnd.toTimeString().slice(0, 8)}</td>
                  //   )
                  // })
                }
                
              </tr> */}
              </tbody>
        </Table>
      </Container>

    </>
	);
};

export default MainPage;