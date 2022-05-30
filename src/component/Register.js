import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Register() {
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
        <div>
          <TextField
            required
            inputProps={{ minLength: 9, maxLength: 9, pattern: "[0-9]*" }}
            pattern="[0-9]{9}"
            id="studentId"
            label="Student ID"
            variant="outlined"
            size="small"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <TextField
          required
          inputProps={{ minLength: 3, maxLength: 12, pattern: "[a-zA-Z]*" }}
          id="lastName"
          label="Last Name"
          variant="outlined"
          size="small"
          onChange={(e) => setLastName(e.target.value)}
        />
        <div>
          <TextField
            required
            inputProps={{ minLength: 2, maxLength: 12, pattern: "[a-zA-Z]*" }}
            id="firstName"
            label="First Name"
            variant="outlined"
            size="small"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            inputProps={{ minLength: 3, maxLength: 12, pattern: "[a-zA-Z]*" }}
            id="nation"
            label="Nation"
            variant="outlined"
            size="small"
            onChange={(e) => setNation(e.target.value)}
          />
        </div>
        {/* <input
          required
          minLength="9"
          maxLength="9"
          pattern="[0-9]{9}"
          type="text"
          value={id}
          placeholder="student id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          required
          minLength="2"
          maxLength="10"
          pattern="[A-Za-z]{2,10}"
          value={lastName}
          placeholder="last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          required
          minLength="2"
          maxLength="10"
          value={firstName}
          pattern="[A-Za-z]{2,10}"

          placeholder="first Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          required
          minLength="3"
          maxLength="10"
          value={nation}
          pattern="[A-Za-z]{3,10}"
          placeholder="nation"
          onChange={(e) => setNation(e.target.value)}
        /> */}
        <div>
          <Button variant="contained" type="submit">Register Student</Button>
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}
export default Register;