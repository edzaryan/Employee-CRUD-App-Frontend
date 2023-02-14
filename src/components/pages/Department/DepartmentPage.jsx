import React, {useEffect, useState} from 'react'
import axios from "axios"
import DepartmentCreateModal from "./DepartmentCreateModal";
import DepartmentList from "./DepartmentList";
import {Link, Route, Routes} from "react-router-dom";

export default function DepartmentPage() {
  const [modalOpened, setModalOpened] = useState(false)
  const [departments, setDepartments] = useState([])
  const [lastDepartments, setLastDepartments] = useState([])

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
        setLastDepartments(oldLastDeps => [res.data, ...oldLastDeps])
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
        <button className="btn btn-light" onClick={ () => setModalOpened(true) }>Create</button>
      </div>
      <div>
        <div className="flex bg-suc">
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Name</div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Actions</div>
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
