import React from 'react'
import { Link } from 'react-router-dom'
import style from"./crud.module.css"

const HomeCrud = () => {
  return (
    <section id={style.nav}>
        <Link to="/create">Add Employees</Link>
        <Link to="/employees">Employee</Link>
    </section>
    
  )
}

export default HomeCrud