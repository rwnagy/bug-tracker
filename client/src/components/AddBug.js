import React, { useState, useEffect } from 'react';
import axios from 'axios';
import http from '../http-common';
import styled from 'styled-components';

function AddBug() {

  const[devs, setDevs] = useState([]);
  const[prios, setPrios] = useState([]);

  const [description, setDescription] = useState("");
  const [developer, setDeveloper] = useState("");
  const [priority, setPriority] = useState("");


  //Posts a New Bug to DB
  const createBug =  () => {
    if (description !== "" && developer !=="" && priority !=="")
      console.log(description, developer, priority);
      axios.post("https://nagyrw-bug-tracker.herokuapp.com/bugs/add", {
        description, 
        developer, 
        priority}).then((response) => {
          alert("Bug Added");
          setDescription("")
          setDeveloper("")
          setPriority("")
      })
    else
      alert("Incomplete Form");
    }

//Gets the Active list of Developers and Priority Levels
  useEffect(() => {
    axios.get("https://nagyrw-bug-tracker.herokuapp.com/devs").then((response) => {
      setDevs(response.data);
    })
    axios.get("https://nagyrw-bug-tracker.herokuapp.com/prio").then((response) => {
      setPrios(response.data);
    })
  })


    return (
      <Div>
        <Form>
          <Label>
            Description
              <textarea id="description" type="textarea" value={description} onChange={(event) => {setDescription(event.target.value);}}/>
          </Label>
          <Label>
              Assign To:
              <select name = "devs" id="devs"  value={developer} onChange={(event) => {setDeveloper(event.target.value);}}>
              <option value="" selected disabled hidden>Select Developer</option>
                  {devs.map((dev) => {
                    return(
                      <option value={dev.name}>{dev.name}</option>
                    );})}
                </select>
            </Label>
            <Label>
              Priority Level:
                <select name = "priority" id="priority" value={priority} onChange={(event) => {setPriority(event.target.value);}}>
                <option value="" selected disabled hidden>Select Priority</option>
                  {prios.map((prio) => {
                    return(
                      <option value={prio.rank}>{prio.rank}</option>
                    );})}
                </select>
            </Label>
            <button onClick={createBug}>Add</button>
        </Form>
      </Div>
    );
  }

export default AddBug;

const Div = styled.div`
font-size: 20px;
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
`

const Form = styled.div`
display: flex;
flex-direction: column;
`

const Label = styled.label`
display: block;
textarea {
display: block;
width: 25rem;
height: 100px;
margin: auto;
}
`