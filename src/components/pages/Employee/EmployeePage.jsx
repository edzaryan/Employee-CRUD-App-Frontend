import React, {useEffect, useState} from 'react'
import EmployeeCreateModal from "./EmployeeCreateModal"
import EmployeeList from "./EmployeeList"
import axios from "axios"
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

export default function EmployeePage() {
  const [modalOpened, setModalOpened] = useState(false)
  const [employees, setEmployees] = useState([])
  const [lastEmployees, setLastEmployees] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    Promise.all([
      axios.get(`/employee`).then(res => res.data),
      axios.get(`/recent-employee`).then(res => res.data)
    ]).then(([employees, lastEmployees]) => {
      setEmployees(employees)
      setLastEmployees(lastEmployees)
    })
  }, [])

  const createEmployee = newEmp => {
    axios
      .post('/employee', newEmp)
      .then(res => {
        setModalOpened(false)
        navigate('/employee/recent')
        setLastEmployees(oldLastEmployees => [res.data, ...oldLastEmployees])
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <div className="flex fjc-b faic mg10-b">
        <div className="all-recent-block">
          <NavLink to="" className={({isActive}) => isActive ? 'underline' : '' } end>All</NavLink>
          <NavLink to="recent" className={({isActive}) => isActive ? 'underline' : '' }>Recent</NavLink>
        </div>
        <button className="btn-light" onClick={ () => setModalOpened(true) }>
          <span className="material-symbols-outlined">add</span> Add
        </button>
      </div>
      <div>
        <div className="thead">
          <div></div>
          <div>Name</div>
          <div>Surname</div>
          <div>Department</div>
          <div>Actions</div>
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
