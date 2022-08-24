import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query';
import axios from 'axios';
import {Container, 
        Alert,  
       } from 'react-bootstrap'
import  Nav from '../components/Navbar'
import Operator from '../components/FormOperator'
import Tabel from '../components/Table'
import { useNavigate } from "react-router-dom";

function Home() {

  let navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: '',
    age: '',
    nickname: '',
    employee: '',
  });

  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response =  axios.post('https://api.kontenbase.com/query/api/v1/a7d8fdfe-7fd0-4406-a3a3-f952102060c3/user-TKI',body);
      console.log(response.data.data);
      // Handling response here
      navigate('/home');
      const alert = (
        <Alert variant="success" className="py-1">
          Data Berhasil Ditambah
        </Alert>
      );
      setMessage(alert);
    } catch (error) {
      // navigate('/');
      console.log(error);
    }
  }

  return (
    <Container>
      <Nav />
      <Container>
      
        <Operator/> 
        <Tabel/>
          <div  className='mt-4 h4' mb-3>Form Tambah Data</div>
        <form  className='mt-4' onSubmit={handleOnSubmit}>
        {message && message}
          <div className='form'>
            <label>Name</label>
            <input 
              className='input-name'
              value={form.name}
              name="name"
              onChange={handleChange} >
            </input>
          </div>
          <div  className='form'>
            <label>Age</label>
            <input 
              className='input-age'
              value={form.age}
              name="age"
              onChange={handleChange}>
            </input>
          </div>
          <div  className='form'>
            <label>Nickname</label>
            <input 
              className='input-nickname'
              value={form.nickname}
              name="nickname"
              onChange={handleChange}>
            </input>
          </div>
          <div  className='form'>
          <label>Employee</label>
          <select  
            className='input-select' 
            id="inputGroupSelect01"
            value={form.employee}
            name="employee"
            onChange={handleChange}>
                <option selected>Choose Employee</option>
                <option value="manager">Manager</option>
                <option value="HRD">HRD</option>
                <option value="fullstak Developer">Fullstack Developer</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
          </select>
          </div>
          <button type="submit" className='btn-simpan'>simpan</button>
        </form>
      </Container>

    </Container>
  )
}

export default Home