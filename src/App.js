
import './App.css';
import states from './data'
import react, { useState } from "react"

function App() {
  const [stateVal, setState] = useState(0);
  const [cityVal, setCity] = useState(0);
  const [landVal, setLand] = useState(0);
  const HandleState = (e) => {
    setState(e.target.value);
  }
  const HandleCity = (e) => {
    setCity(e.target.value)
  }
  const HandleLand = (e) => {
    setLand(e.target.value)
  }


  return (
    <div className="App">

      <select id="state" value={stateVal} onChange={HandleState}>
        {states.map((para, index) => {
          return <option value={index}>{para.name}</option>
        })}
        {console.log(stateVal)}
      </select>


      <select id="city" value={cityVal} onChange={HandleCity}>
        {states[stateVal].city.map((para, index) => {
          return <option value={index}>{para.name}</option>
        })}
      </select>


      <select id="landmark" value={landVal} onChange={HandleLand}>
        {states[stateVal].city[cityVal].landmarks.map((para, index) => {
          return <option value={index}>{para.name}</option>
        })}
      </select>

      <div id="state-title">{states[stateVal].name}</div>
      <div id="state-description">{states[stateVal].description}</div>
       
      <div id="city-title">{states[stateVal].city[cityVal].name}</div>
      <div id="city-description">{states[stateVal].city[cityVal].description}</div>

      <div id="landmark-title">{states[stateVal].city[cityVal].landmarks[landVal].name}</div>
      <div id="landmark-description">{states[stateVal].city[cityVal].landmarks[landVal].description}</div>


    </div>
  );
}

export default App;
