import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './crud.module.css';
import axios from 'axios';

const UpdateEmployee = () => {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [phone, setPhone] = useState('');
  let [email, setEmail] = useState('');
  let [designation, setDesignation] = useState('');
  let { id } = useParams();
  let navigator = useNavigate();

  let firstNameData = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  let lastNameData = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  let phoneData = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };
  let emailData = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  let designationData = (e) => {
    e.preventDefault();
    setDesignation(e.target.value);
  };

  let formHandle = (e) => {
    e.preventDefault();
    let payLoad = { firstName, lastName, phone, email, designation };
    axios.put(`http://localhost:8080/employees/${id}`, payLoad)
      .then(() => {
        console.log('Employee has been updated successfully');
        navigator('/employees');
      })
      .catch((error) => {
        console.error('Error updating employee:', error);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/employees/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setFirstName(resp.data.first_name);
        setLastName(resp.data.last_name);
        setPhone(resp.data.phone);
        setEmail(resp.data.email);
        setDesignation(resp.data.designation);
      });
  }, [id]);

  return (
    <div id={style.myForm}>
      <form>
        <table>
          <tbody>
            <tr>
              <th colSpan="2"><h4>Update the Employee Details</h4></th>
            </tr>
            <tr>
              <td><label htmlFor="firstName">First Name</label></td>
              <td><input type="text" name="firstName" value={firstName} onChange={firstNameData} /></td>
            </tr>
            <tr>
              <td><label htmlFor="lastName">Last Name</label></td>
              <td><input type="text" name="lastName" value={lastName} onChange={lastNameData} /></td>
            </tr>
            <tr>
              <td><label htmlFor="phone">Phone No</label></td>
              <td><input type="text" name="phone" value={phone} onChange={phoneData} /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email Id</label></td>
              <td><input type="text" name="email" value={email} onChange={emailData} /></td>
            </tr>
            <tr>
              <td><label htmlFor="designation">Designation</label></td>
              <td>
                <select name="designation" id="designation" value={designation} onChange={designationData}>
                  <option value="">Choose One</option>
                  <option value="Software Developer">Software Developer</option>
                  <option value="Software Tester">Software Tester</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="SQL Developer">SQL Developer</option>
                </select>
              </td>
            </tr>
            <tr>
              <th colSpan="2"><button onClick={formHandle}>Update</button></th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default UpdateEmployee;
