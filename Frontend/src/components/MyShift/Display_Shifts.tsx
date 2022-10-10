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
import { Dispprops } from '../../interface';
//import xtype from 'xtypejs';

const MainPage: React.FC = (props: Dispprops): JSX.Element => {

  // const [shift_input, setIsUserLoggedIn] = useState<Shift[]>(
  //   [

  //     {shiftID: 12,
  //       shiftStart: new Date("2022-10-11T10:00:00.000"),
  //       shiftEnd: new Date("2022-10-11T17:00:00.000"),
  //       storeName: "Jason Deli",
  //     },
  //     {shiftID: 53,
  //       shiftStart: new Date("2022-10-13T12:00:00.000"),
  //       shiftEnd: new Date("2022-10-13T14:00:00.000"),
  //       storeName: "Oval",
  //     },
  //     {shiftID: 49,
  //       shiftStart: new Date("2022-10-14T06:30:00.000"),
  //       shiftEnd: new Date("2022-10-14T08:30:00.000"),
  //       storeName: "Oval",
  //     },
  //     {shiftID: 98,
  //       shiftStart: new Date("2022-10-16T06:30:00.000"),
  //       shiftEnd: new Date("2022-10-16T08:30:00.000"),
  //       storeName: "WellRec",
  //     }
  //   ]);

      const shift_input:Shift[] = props.ShiftInput;
      //const [shift_input, setShiftClone] = useState(structuredClone(props.ShiftInput))
      const [shift_clone, setShiftClone] = useState(structuredClone(shift_input))

      const handleClick3 = (e:any) => {
        const results = shift_input.filter(shift => (shift.storeName).replace(/ /g, '') === (e.target.text).replace(/ /g, ''))
        
        const res = [new Set(results.map(shift => shift.shiftStart.toDateString()))]
        const r = Array.from(res[0])

        const name = [new Set(shift_input.map(shift => shift.storeName))]
        const name2 = Array.from(name[0])

        setHeading(e.target.text)
        setResult2(name2)
        setGetdate2(r)
        setShiftClone(results)
        
      }

      const handleClick2 = (e:any) => {
        window.location.reload()
      }
    
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
    
    
      const result = [new Set(shift_input.map(shift => shift.storeName))];
      const [result2, setResult2] = useState(Array.from(result[0]));
    
      const getdate = [new Set(shift_input.map(shift => shift.shiftStart.toDateString()))];
      const [getdate2, setGetdate2] = useState(Array.from(getdate[0]));
      
      // THE CODE BELOW CODE TRIES TO GROUP THE OBJECTS
      // const cats = S.reduce((shift, { shiftStart , shiftEnd , storeName, sid }) => {
      //   (sid = sid || []).push(shiftStart.toString().slice(12, 20)+shiftEnd.toString().slice(12, 20)+storeName);
      //   return shift;
      // }, {});
      // console.log(cats);
      const [heading, setHeading] = useState("All Shifts")

	return (
		<>
    <Container>
      <Navbar/>
    </Container>

    <Container>
      <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" title="Work Place" onClick={(e) => {handleClick2(e)}}>My Shift</Button>
            <DropdownButton id="dropdown-basic-button" title="Work Place">
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
      <h3> {heading} </h3>
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
                  shift_clone.map((shift:any) => {
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