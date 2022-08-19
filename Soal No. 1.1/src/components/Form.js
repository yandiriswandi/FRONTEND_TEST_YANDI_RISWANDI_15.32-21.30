// import React Bootstrap components here
import { Form, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap'

// import css modules
import cssModules from "./Form.module.css";
import React, { useState, useEffect } from 'react'
import axios from 'axios';



function FormComponent() {
  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);

  useEffect(() => {
    fetchDataProvinsi();
    fetchDataKota();
    fetchDataKecamatan();
  }, []);

const styles = {
  form: {
    margin: "16px 20% 0",
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
      'http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=%7Bid_provinsi%7D'
    )
    .then((res) => {
      setKota(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log('error', err);
    });
}

function fetchDataKecamatan() {
  axios
    .get(
      'https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=%7Bid_kota%7D'
    )
    .then((res) => {
      setKecamatan(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log('error', err);
    });
}
  return (
    <div>
      <form style={styles.form}>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Provinsi 
          </label>
          {/* <Select options={provinsi} /> */}
          <select id="gender" className="form-select" defaultValue="Choose...">
          {provinsi?.map((item,index) => (
            <option>{item.nama}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Kota
          </label>
          <select id="gender" className="form-select" defaultValue="Choose...">
          {provinsi?.map((item,index) => (
            <option>{item.kota_kabupaten}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="form-label">
           Kecamatan
          </label>
          <select id="gender" className="form-select" defaultValue="Choose...">
          {provinsi?.map((item,index) => (
            <option>{item.kecamatan}</option>
            ))}
          </select>
        </div>

      </form>
    </div>
  )
}

export default FormComponent
