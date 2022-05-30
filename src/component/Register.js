import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
 
function Register () {
    const [id, setId] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [nation, setNation] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://localhost:7119/api/Student", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              studentId: id,
              lastName: lastName,
              firstName: firstName,
              nation: nation,
            }),
          });
          //let resJson = await res.json();
          if (res.status === 201) {
            setId("");
            setLastName("");
            setFirstName("");
            setNation("");
            setMessage("User created successfully");
          } else {
            setMessage("User isn't submitted, The ID is already exist");
          }
        } catch (err) {
          console.log(err);
        }
      };



    return (   
        <div className="Register">
      <form onSubmit={handleSubmit}>
        <input
          required
          minLength="9"
          maxLength="9"
          pattern="[0-9]{9}"
          type="text"
          value={id}
          placeholder="id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          required
          minLength="2"
          pattern="[A-Za-z].{2,}"
          value={lastName}
          placeholder="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          required
          minLength="2"
          value={firstName}
          pattern="[A-Za-z].{2,}"
          placeholder="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          required
          minLength="3"
          value={nation}
          pattern="[A-Za-z].{3,}"
          placeholder="nation"
          onChange={(e) => setNation(e.target.value)}
        />
        <Button variant="contained" type="submit">Register Student</Button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div> 
);}
export default Register;