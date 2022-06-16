import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function CurrentBug() {

  const[bugs, setBugs] = useState([]);

  //Gets Current list of Active Bugs
  useEffect(() => {
    axios.get("https://nagyrw-bug-tracker.herokuapp.com/bugs").then((response) => {
      setBugs(response.data);
    })
  })

  //Deletes the selected bug
  const deleteBug = (id) => {
    axios.delete("https://nagyrw-bug-tracker.herokuapp.com/bugs/"+id).then((response) => {
        alert("Bug Deleted");
    });
  }


  return (
    <Div>
      <h1>Active Bugs</h1>
        {bugs.map((bug) => {
          return(
            <div>
            <p>Assigned: <span>{bug.developer}</span></p>
            <p>Priority: <span>{bug.priority}</span></p>
            <p>Description:</p>
            <p><span>{bug.description}</span></p>
            <button onClick={() => deleteBug(bug._id)}>Delete</button>
            <hr></hr>
            </div>
          );})}
    </Div>
  );
}

export default CurrentBug;

const Div = styled.div`
font-size: 20px;
font-weight: bold;
margin: auto;
max-width: 750px;
align-items: center;
background: #f6f6f6;
box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
border-radius: 5px;
padding: 40px 50px 30px;
background-color: rgba(110,118,129,0.1);
color: #c9d1d9;
border: 0.1rem solid;
border-color: #c9d1d9;
p{
    text-align: left;
    color: #c9d1d9;
    span{
        font-size: 20px;
        font-weight: normal;
    }
}
`
