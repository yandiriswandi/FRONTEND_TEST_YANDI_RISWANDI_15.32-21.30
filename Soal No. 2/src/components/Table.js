import React from 'react'
import {Table} from 'react-bootstrap'

export default function Tabel() {
  return (
    <div>
         <div className='mt-4 h4'>Menampilkan Data</div>
        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Nickname</th>
              <th>Employe</th>
            </tr>
          </thead>
          <tbody>
            <tr>            
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Staff</td>
            </tr>
            <tr>          
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
    </div>
  )
}
