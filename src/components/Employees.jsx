import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './crud.module.css';

const Employees = () => {
      
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/employees')
      .then((res) => {
        console.log(res.data);
        setContent(res.data);
      });
  }, []);

  const deleteData = (id) => {
    axios.delete(`http://localhost:8080/employees/${id}`)
      .then(() => {
        // Assuming you want to refresh the employee list after deletion
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };
  return (
    <div>
      {content.map((employee) => (
        <div key={employee.id} id={style.card}>
          <table>
            <tr>
              <td><h4>First Name</h4></td>
              <td><h4>: {employee.firstName}</h4></td>
            </tr>
            <tr>
              <td><h4>Last Name</h4></td>
              <td><h4>: {employee.lastName}</h4></td>
            </tr>
            <tr>
              <td><h4>Phone No</h4></td>
              <td><h4>: {employee.phone}</h4></td>
            </tr>
            <tr>
              <td><h4>Email Id</h4></td>
              <td><h4>: {employee.email}</h4></td>
            </tr>
            <tr>
              <td><h4>Designation</h4></td>
              <td><h4>: {employee.designation}</h4></td>
            </tr>
            <tr>
              <td><a href="">Edit</a></td>
              <td><button onClick={() => deleteData(employee.id)}>Delete</button></td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Employees;
