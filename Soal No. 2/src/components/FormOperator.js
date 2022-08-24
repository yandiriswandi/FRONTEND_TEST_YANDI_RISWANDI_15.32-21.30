import React, { useState, useEffect } from "react";
import {Form} from 'react-bootstrap'

export default function Operator() {
  const [state, setState] = useState({
    nilai1: "",
    nilai2: "",
    operator: "",
    hasil: "",
  
  });
  

  const handleOnChange = (e) => {
    // setState here
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

    console.log(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(state);
    let nilai1 =state.nilai1;
    let nilai2 =state.nilai2;
    let operator=state.operator;

    var hasil;
    switch (operator){
      case '+':
        hasil= Number(nilai1) + Number(nilai2);
        break;
      case '-':
        hasil= Number(nilai1) - Number(nilai2);
        break;
      case '*':
        hasil= Number(nilai1) * Number(nilai2);
        break;
      case '/':
        hasil= Number(nilai1) / Number(nilai2);
        break;
    }
    setState({nilai1,nilai2,operator,hasil})
    console.log(hasil);

  }
  
  return (
    <div>
        <Form className='mb-4' onSubmit={handleOnSubmit}>
          <div className='mt-4 h4 mb-3 '>Form Operator</div>
              <input 
                type="number"  
                onChange={handleOnChange}
                value={state.angka1} 
                name="nilai1" 
                className='form-operator rounded text-kalkulator' 
                placeholder=" angka 1" 
              />
              <input 
                type="number"
                onChange={handleOnChange}
                value={state.angka2} 
                name="nilai2" 
                className='form-operator rounded text-kalkulator'  
                placeholder="angka 2"
              />
              <select 
                className='form-operator rounded text-kalkulator' 
                onChange={handleOnChange}
                value={state.operator} 
                name="operator" 
                id="inputGroupSelect01"
              >
                  <option selected>+,-,x,/</option>
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="*">x</option>
                  <option value="/">/</option>
              </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  =
              <input 
                className='form-operator rounded text-kalkulator'  
                placeholder="Hasil"  
                value={state.hasil}
              />
              <div className="mt-3 ml-4">
                <button className="btn btn-secondary ml-4">lihat hasil</button>
              </div>
        </Form>
        {/* {this.renderHasil()} */}
    </div>
  )
}
