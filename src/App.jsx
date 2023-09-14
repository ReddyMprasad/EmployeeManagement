import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeCrud from './components/HomeCrud'
import AddEmployee from './components/AddEmployee'
import Employees from './components/Employees'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <HomeCrud/>
        <Routes>
            <Route element={<AddEmployee/>} path="/create"/>
            <Route element={<Employees/>} path="/employee"/>

        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App