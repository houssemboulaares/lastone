import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function Register() {
   const[user,setUser]=useState({})
   const addUser=()=>{
     
      axios.post('http://localhost:7000/user/register',user).then(res=>console.log(res))

      
   }
  return (
    <Form className='homeimg'> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setUser({...user,email:e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"onChange={(e)=>setUser({...user,password:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PasswordConfirme</Form.Label>
        <Form.Control type="password" placeholder="PasswordConfirme"onChange={(e)=>setUser({...user,passwordconfirme:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={addUser}>
        Submit
      </Button>
    </Form>
  );
}

export default Register;