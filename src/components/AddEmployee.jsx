import React, { useState } from 'react';
import style from "./crud.module.css";
import axios from 'axios';

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const firstNameData = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameData = (e) => {
    setLastName(e.target.value);
  };

  const phoneData = (e) => {
    setPhone(e.target.value);
  };

  const emailData = (e) => {
    setEmail(e.target.value);
  };

  const designationData = (e) => {
    setDesignation(e.target.value);
  };

  const formHandle = (e) => {
    e.preventDefault();
    if (!isSubmitted) { 
      setIsSubmitted(true); 
      const payLoad = { firstName, lastName, phone, email, designation };
      axios.post("http://localhost:8080/employees", payLoad)
        .then(() => {
          console.log("Data has been added");
        })
        .catch(() => {
          console.log("Something is wrong");
        });
    }
  };

  return (
    <div id={style.myForm}>
      <form>
        <table>
          <tbody>
            <tr>
              <th colSpan="2"><h4>Employee Details</h4></th>
            </tr>
            <tr>
              <td><label htmlFor="firstName">First Name</label></td>
              <td><input type="text" name="firstName" id="firstName" value={firstName} onChange={firstNameData} /></td>
            </tr>
            <tr>
              <td><label htmlFor="lastName">Last Name</label></td>
              <td><input type="text" name="lastName" id="lastName" value={lastName} onChange={lastNameData} /></td>
            </tr>
            <tr>
              <td><label htmlFor="phone">Phone No</label></td>
              <td><input type="text" name="phone" id="phone" value={phone} onChange={phoneData} /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email Id</label></td>
              <td><input type="email" name="email" id="email" value={email} onChange={emailData} /></td>
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
              <th colSpan="2"><button onClick={formHandle} disabled={isSubmitted}>Submit</button></th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AddEmployee;
