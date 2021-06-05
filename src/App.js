import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AgeCalculator from './layout/AgeCalc/AgeCalculator'
import './App.css';
import DaysCalculator from './layout/DaysCalc/DaysCalculator';

function App() {
  const [show, setShow] = useState(false);
  
  const age = () => {
    setShow(true)
  }

  const days = () => {
    setShow(false)
  }

  return (
    <div>
      <div className="main_toggle pt-3">
        <Button onClick={age}>Age Calculator</Button>
        <Button onClick={days}>Days Calculator</Button>
      </div>
      {show ? <AgeCalculator /> : <DaysCalculator />}
    </div>
  )
}

export default App
