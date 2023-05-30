import React from 'react';

function NavigationBar() {
  return (
    <nav style={{ backgroundColor: 'Green', color: 'Black'}}>
      <h1 style={{ color:'white', fontSize: 25, display: 'flex', justifyContent: 'space-between', listStyleType: 'none', padding: 10, margin : 5}}>
        ClassMate - One Step Solution at Study
      </h1>
    </nav>
  );
}

export default NavigationBar;
