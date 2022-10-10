import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Select</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Jason Dally</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Wellrec</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;