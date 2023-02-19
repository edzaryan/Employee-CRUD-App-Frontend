import React, {useEffect, useState} from 'react'
import axios from "axios"
import DepartmentCreateModal from "./DepartmentCreateModal";
import DepartmentList from "./DepartmentList";
import {NavLink, Route, Router, Routes, useNavigate} from "react-router-dom";

export default function DepartmentPage() {
  const [modalOpened, setModalOpened] = useState(false)
  const [departments, setDepartments] = useState([])
  const [lastDepartments, setLastDepartments] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    Promise.all([
      axios.get(`/department`).then(res => res.data),
      axios.get(`/recent-department`).then(res => res.data)
    ]).then(([departments, lastDepartments]) => {
      setDepartments(departments)
      setLastDepartments(lastDepartments)
    })
  }, [])

  const createDepartment = newDep => {
    axios
      .post('/department', newDep)
      .then(res => {
        setModalOpened(false)
        navigate('/department/recent')
        setLastDepartments(oldLastDeps => [res.data, ...oldLastDeps])
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
        <button className="btn-light flex faic fjc-c" onClick={ () => setModalOpened(true) }>
          <span className="material-symbols-outlined">add</span> Add
        </button>
      </div>
      <div>
        <div className="thead">
          <div>Name</div>
          <div>Actions</div>
        </div>
        <Routes>
          <Route index element={ <DepartmentList list={ departments } setDepartments={ setDepartments } /> } />
          <Route path="recent" element={ <DepartmentList list={ lastDepartments } setDepartments={ setLastDepartments } /> } />
        </Routes>
      </div>

      {
        modalOpened && <DepartmentCreateModal
                          setModalOpened={ setModalOpened }
                          createDepartment={ createDepartment } />
      }
    </div>
  )
}
