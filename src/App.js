
import './App.css';
import Readings from './Readings';
import Form from './Form';
import { useState } from "react";

function App() {

  const [readings, setReadings] = useState([]);

    function addReading(newReading) {
        setReadings([...readings, newReading])
    }
  return (
    <>
      <Form addReading={addReading}/>
      <Readings readings={readings}/>
    </>
  );
}

export default App;
