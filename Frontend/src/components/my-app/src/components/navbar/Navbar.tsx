const Navbar = () => {
  // const p = props.name;
  // console.log(p)
    return (
      <nav className="navbar">
        <h1>The Shift Planner</h1>
        <div className="links">
          <a href="/" style={{
            textDecoration: 'none',
            color: 'black', 
            borderRadius: '8px',
            marginRight: '10px'
          }}>Shifts</a>
          <a href="/" style={{color: 'black', textDecoration: 'none'}}>Home</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;