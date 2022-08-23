// import React Bootstrap components here
import { Form, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function FormComponent() {
  const [provinsi, setProvinsi] = useState([]);
  const [provinsiId, setProvinsiId] = useState('');
  const [kota, setKota] = useState([]);
  const [kotaId, setKotaId] = useState('');
  const [kecamatan, setKecamatan] = useState([]);

const styles = {
  form: {
    margin: "100px 20% 0",
  },
};

// get
function fetchDataProvinsi() {
  axios
    .get(
      'http://dev.farizdotid.com/api/daerahindonesia/provinsi'
    )
    .then((res) => {
      setProvinsi(res.data.provinsi);
      console.log(res.data.provinsi);
      
    })
    .catch((err) => {
      console.log('error', err);
    });
}


function fetchDataKota() {
  axios
  .get(
    `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`
    )
    .then((res) => {
      setKota(res.data.kota_kabupaten);
      console.log(res.data.kota_kabupaten);
    })
    .catch((err) => {
      console.log('error', err);
    });
  }

function fetchDataKecamatan() {
  axios
    .get(
      `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kotaId}`
    )
    .then((res) => {
      setKecamatan(res.data.kecamatan);
      console.log(res.data.kecamatan);
    })
    .catch((err) => {
      console.log('error', err);
    });
  }

  useEffect(() => {
    fetchDataProvinsi();
  }, []);
  useEffect(() => {
    fetchDataKota();
  }, [provinsiId,kotaId]);
  useEffect(() => {
    fetchDataKecamatan();
  }, [kotaId]);
  
  const handleProvinsi=(event)=>{
      const getprovinsiId = event.target.value;
      setProvinsiId(getprovinsiId); 
  } 

  const handleKota=(event)=>{
   
    const getkotaId = event.target.value;
    console.log(getkotaId);
    setKotaId(getkotaId); 
  } 

  return (
    <div className='c'>
      <form style={styles.form}>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Provinsi 
          </label>
          {/* <Select options={provinsi} /> */}
          <select id="provinsi" name="provinsi" className="form-select shadow" onChange={(e)=>handleProvinsi(e)}>
            <option className='text-option'>Select Provinsi</option>
          {provinsi?.map((item,index) => (
            <option key={item.id} value={item.id}>{item.nama}</option>
          ))}
          </select>
        </div>

        <div className="form-group mt-4">
          <label htmlFor="gender" className="form-label">
            Kota
          </label>
          <select id="kota" name="kota" className="form-select shadow" onChange={(e)=>handleKota(e)}>
            <option className='text-option'>Select Kota / Kabupaten</option>
          {kota?.map((item,index) => (
            <option key={item.id} value={item.id}>{item.nama}</option>
          ))}
          </select>
        </div>

        <div className="form-group mt-4">
          <label htmlFor="gender" className="form-label">
           Kecamatan
          </label>
          <select id="gender" className="form-select shadow" defaultValue="Choose...">
            <option className='text-option'>Select Kecamatan</option>
          {kecamatan?.map((item,index) => (
            <option>{item.nama}</option>
          ))}
          </select>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
