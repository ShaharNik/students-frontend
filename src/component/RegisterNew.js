// import * as React from "react";
// import { useState } from "react";
// //import Headers from "./Header";
// import {useForm} from 'react-hook-form'
// const [message, setMessage] = useState("");

// export default function RegisterForm() {
//     const { register, handleSubmit, formState: {errors} } = useForm({
//         defaultValues: {
//             studentID: "",
//             LastName: "",
//             FirstName: "",
//             Nation: ""
//         }
//     });
//     const onSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           let res = await fetch("https://localhost:7119/api/Student", {
//             method: "POST",
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               studentId: id,
//               lastName: lastName,
//               firstName: firstName,
//               nation: nation,
//             }),
//           });
//           //let resJson = await res.json();
//           if (res.status === 201) {
//             setMessage("User created successfully");
//           } else {
//             setMessage("Some error occured");
//           }
//         } catch (err) {
//           console.log(err);
//         }
//       };
//     return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register("StudentID", {required: 'This is required', minLength: { value: 9, message: 'Length should be 9'}, maxLength: 9})} placeholder="Student ID" />
//         <p>{errors.studentID.message}</p>
//         <input {...register("LastName", {required: 'This is required', minLength: { value: 2, message: 'min Length should be 2'}})} placeholder="Last Name" />
//         <p>{errors.LastName.message}</p>
//         <input {...register("FirstName", {required: 'This is required', minLength: { value: 2, message: 'min Length should be 2'}})} placeholder="First Name" />
//         <p>{errors.FirstName.message}</p>
//         <input {...register("Nation", {required: 'This is required',minLength: { value: 3, message: 'min Length should be 3'}})} placeholder="Nation" />
//         <p>{errors.Nation.message}</p>
//         <input type="submit" />
//       </form>
//     );
// }