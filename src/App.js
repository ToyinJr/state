import './style.css';
import React, {useState} from'react';
// import Cars from './Data';  
import {honda, tesla} from './Data'; 



function App() {

  // var isDone = false;
  let [isDone, changeIsDone] = useState(false);
  let strikeThrough = {textDecoration: "line-through"};

  let strike = () => {
    changeIsDone(true);
    console.log(isDone);
  }

  let unstrike = () => {
    changeIsDone(false);
  }


  let [count, setCount] = useState(0);

  // console.log(count);

  var increase = () => {
    setCount(count + 1);
  }

  var decrease = () => {
    setCount(count - 1);  
  }

  let [greet, setGreet] = useState("Greeting");

  let morning = () => {
    setGreet("Good Morning ☀️");
  }

  let afternoon = () => {
    setGreet("Good Afternoon 🌤️");
  }

  let evening = () => {
    setGreet("Good Evening 🌙");
  }

  let [time, setTime] = useState(0);

  let newTime = () => {
    setTime(new Date().toLocaleTimeString());
    // setTime("ahhhhhhhhhhhhh");
    }

  let refreshTime = () => {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(refreshTime, 1000);

  let [name1, changeName1] = useState("name");

  let newName = () => {
    changeName1("Toyin Junior");
  }

  let {features : {topspeed:hondatopSpeed}} = honda;
  let {features: {topspeed:teslatopSpeed}} = tesla;
  let {colorsByPopularity:[hondatopcolor]} = honda;
  let {colorsByPopularity:[teslatopcolor]} = tesla;

  return (
    <div className="container">

      <h1>{count}</h1>
      <div style={{display:'flex'}}>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      </div>

      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>

      <h3>{greet}</h3>
      <div style={{display:'flex', gap:"1em", cursor:"pointer", alignItems  :"center"}}>
      <p onClick={morning}>☀️</p>
      <p onClick={afternoon}>🌤️</p>
      <p onClick={evening}>🌙</p>
      </div>

      <h4>{name1}</h4>
      <button onClick={newName}>Show name</button>

      <table>
    <tr>
      <th>Model Name</th>
      <th>Top Speed</th>
      <th>Top color</th>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondatopSpeed}</td>
      <td>{hondatopcolor}</td>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslatopSpeed}</td>
      <td>{teslatopcolor}</td>
    </tr>
  </table>

  <div>
    <p style={isDone ? strikeThrough : null}>A new state stuff</p>
    <button onClick={strike}>strike</button>
    <button onClick={unstrike}>Unstrike</button>
  </div>

      </div>
  );
}


export default App;
