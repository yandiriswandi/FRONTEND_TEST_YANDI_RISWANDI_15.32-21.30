import { useContext, useState } from 'react';
import {Form, 
        Container,
        Button,
        Alert  
        } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// Import useMutation from react-query here ...
import { useMutation } from 'react-query';
import { UserContext } from '../context/userContext';

// Get API config here ...
import { API } from '../config/api';
import axios from 'axios';

export default function Login() {

let navigate = useNavigate();


// const [state, dispatch] = useContext(UserContext);

// const [message, setMessage] = useState(null);

// Create variabel for store data with useState here ...
const [form, setForm] = useState({
  username: '',
  password: '',
});

const { username, password } = form;

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
});
console.log(form);
};

// // Create function for handle insert data process with useMutation here ...
// const handleSubmit = useMutation(async (e) => {
//   try {
//     e.preventDefault();

//     // Configuration Content-type
//     // const config = {
//     //   headers: {
//     //     'Content-type': 'application/json',
//     //   },
//     // };

//     // Data body
//     const body = JSON.stringify(form);

//     // Insert data user to database
//     const response =  axios.post('http://reqruitement-test.teknologikartu.com/v1/auth/login', body);
//     console.log(response.data.data);
//     // Handling response here
   
//     // Checking process
//       if (response.status == "success") {
//         // Send data to useContext
//         dispatch({
//           type: "LOGIN_SUCCESS",
//           payload: response.data,
//         });
//     // Get user data
   
//       navigate("/home")
//       const alert = (
//         <Alert variant="success" className="py-1">
//           Login Success
//         </Alert>
//       );
//       setMessage(alert);
//     }
//   } catch (error) {
//     const alert = (
//       <Alert variant="danger" className="py-1">
//         Failed
//       </Alert>
//     );
//     setMessage(alert);
//     console.log(error);
//   }
// });


  return (
    <Container style={{ width: '30rem' ,marginTop:'70px'}}>
        {/* {message && message} */}
        {/* <Form onSubmit={(e) => handleSubmit.mutate(e)}> */}
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
                className="input-login" 
                type="text" 
                placeholder="Enter Nickname" 
                value={form.username}
                name="username"
                onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                className='input-login' 
                type="password" 
                placeholder="Password"
                value={form.password}
                name="password"
                onChange={handleChange} 
            />
        </Form.Group>
        <Button variant="primary" >
            Submit
        </Button>
        </Form>
    </Container>
  )
}
