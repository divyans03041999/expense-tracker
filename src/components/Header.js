import React from 'react';

function Header({totalIncome}) {
  return (
    <header>
      <h1>Income Tracker</h1>
      <h2><marquee direction = "left">development server started for expense tracker app</marquee></h2>
      <div className="total-income">₹{totalIncome}</div>
    </header>
  );
}

export default Header;