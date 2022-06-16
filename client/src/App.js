import React, { useState, useEffect } from 'react';
import AddBug from './components/AddBug';
import CurrentBug from './components/CurrentBug';
import './App.css';
import styled from 'styled-components';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const [addBug, setAddBug] = useState(true)

  function showCurrentBug(){
    if(addBug === true) {
      setAddBug(!addBug);
    }
  }
  function showAddBug(){
    if(addBug === false) {
      setAddBug(!addBug);
    }
  }
  
  return (
    <Div className="App">
      <p>{data}</p>
      <h1>Bug Tracker</h1>
        { addBug ? <AddBug/ > : <CurrentBug />}
      <div>
        <button class="view-button" onClick={() => showCurrentBug()}>Current Bugs</button>
        <button class="view-button" onClick={() => showAddBug()}>Add Bug</button>
      </div>
    </Div>
    );
  }

export default App;

const Div = styled.div`
background-color: #0d1117;
color: #c9d1d9;
`