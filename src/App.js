import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = "Phương Nguyễn";
  const isMale = true;
  const age = "32";
  const student = {
    name: "ease frontend"
  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello: {name} - {age} - {isMale ? 'Male' : 'Femail'}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}
        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}



        <p>{student.name}</p>
        <ul>
          {colorList.map(color => (
            <li key={color} style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
