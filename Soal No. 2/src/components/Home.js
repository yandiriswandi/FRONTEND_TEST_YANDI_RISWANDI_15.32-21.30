// import React Bootstrap components here
import {Container, 
        Navbar, 
        Col, 
        Row, 
        Form, 
        Table, 
        Button 
      } from 'react-bootstrap'
import  Nav from './Navbar'
import Operator from './FormOperator'
import Tabel from './Table'

function Home() {
  return (
    <Container>
      <Nav />
      <Container>
        <Operator/> 
        <Tabel/>
          <div  className='mt-4 h4' mb-3>Form Tambah Data</div>
        <form  className='mt-4' >
          <div className='form'>
            <label>Name</label>
            <input className='input-name'></input>
          </div>
          <div  className='form'>
            <label>Age</label>
            <input className='input-age'></input>
          </div>
          <div  className='form'>
            <label>Nickname</label>
            <input className='input-nickname'></input>
          </div>
          <div  className='form'>
          <label>Employee</label>
          <select  className='input-select' id="inputGroupSelect01">
                <option selected>Staff</option>
                <option value="1">Manager</option>
                <option value="2">HRD</option>
                <option value="3">Marketting</option>
          </select>
          </div>
          <button className='btn-simpan'>simpan</button>
        </form>
      </Container>

    </Container>
  )
}

export default Home
