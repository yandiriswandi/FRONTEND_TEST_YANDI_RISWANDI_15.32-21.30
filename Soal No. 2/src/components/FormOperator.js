import React from 'react'
import {Form} from 'react-bootstrap'

export default function Operator() {
  return (
    <div>
        <Form className='mb-4'>
          <div className='mt-4 h4 mb-3 '>Form Operator</div>
              <input className='form-operator' placeholder=" angka 1" />
              <input className='form-operator'  placeholder="angka 2" />
              <select className='form-operator'  id="inputGroupSelect01">
                <option selected>+,-,x,/</option>
                <option value="1">+</option>
                <option value="2">-</option>
                <option value="3">x</option>
                <option value="3">/</option>
              </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  =
              <input className='form-operator'  placeholder="Hasil" />
        </Form>
    </div>
  )
}
