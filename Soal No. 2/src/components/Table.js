import {Table} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Tabel() {
  const [state, setState] = useState([]);

   // get
   function fetchData() {
    axios
      .get(
        'https://api.kontenbase.com/query/api/v1/a7d8fdfe-7fd0-4406-a3a3-f952102060c3/user-TKI'
      )
      .then((res) => {
        setState(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
         <div className='mt-4 h4'>Menampilkan Data</div>
        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Nickname</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item,index) => (            
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.nickname}</td>
              <td>{item.employee}</td>
            </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}
