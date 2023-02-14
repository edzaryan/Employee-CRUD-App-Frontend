import React, {useEffect, useState} from 'react'
import EmployeeCreateModal from "./EmployeeCreateModal"
import EmployeeList from "./EmployeeList"
import axios from "axios"
import {Link, Route, Routes} from "react-router-dom";

export default function EmployeePage() {
  const [modalOpened, setModalOpened] = useState(false)
  const [employees, setEmployees] = useState([])
  const [lastEmployees, setLastEmployees] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get(`/employee`).then(res => res.data),
      axios.get(`/recent-employee`).then(res => res.data)
    ]).then(([employees, lastEmployees]) => {
      setEmployees(employees)
      setLastEmployees(lastEmployees)
    })
  }, [])

  const createEmployee = emp => {
    axios
      .post('/employee', emp)
      .then(res => {
        setLastEmployees(oldLastEmployees => [res.data, ...oldLastEmployees])
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <div className="flex fjc-b faic mg10-b">
        <div>
          <Link to="" className="pd5">All</Link>
          <Link to="recent" className="pd5">Recent</Link>
        </div>
        <button className="btn-light" onClick={ () => setModalOpened(true) }>Create</button>
      </div>
      <div>
        <div className="flex bg-suc">
          <div className="fl1 ptb5 plr5"></div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Name</div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Surname</div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Department</div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Actions</div>
        </div>
        <Routes>
          <Route index element={ <EmployeeList list={ employees } setEmployees={ setEmployees } /> } />
          <Route path="recent" element={ <EmployeeList list={ lastEmployees } setEmployees={ setLastEmployees } /> } />
        </Routes>
      </div>
      {
        modalOpened && <EmployeeCreateModal
                          setModalOpened={ setModalOpened }
                          createEmployee={ createEmployee } />
      }
    </div>
  )
}
