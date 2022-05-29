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
            body: JSON.stringify({
              "studentId": id,
              "lastName": lastName,
              "firstName": firstName,
              "nation": nation
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setId("");
            setLastName("");
            setFirstName("");
            setNation("");
            setMessage("User created successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };



    return (   
        <div className="Register">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          placeholder="id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={firstName}
          placeholder="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={nation}
          placeholder="nation"
          onChange={(e) => setNation(e.target.value)}
        />
        <Button variant="contained" type="submit">Register Student</Button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div> 
);}
export default Register;