import React, {useEffect, useState} from 'react'
import axios from "axios"
import Department from "./Department";
import DepartmentCreateModal from "./DepartmentCreateModal";
import DepartmentList from "./DepartmentList";

export default function DepartmentPage() {
  const [modalOpened, setModalOpened] = useState(false)
  const [departments, setDepartments] = useState([])
  const [lastDepartments, setLastDepartments] = useState([])

  useEffect(() => {
    axios
      .get('/department')
      .then(res => setDepartments(res.data))
      .catch(err => console.log(err.message))
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
      <div className="flex fjc-r mg10-b">
        <button className="fc-lgt pd10 bg-lgt brd1 fc-drk rad3" onClick={ () => setModalOpened(true) }>Create</button>
      </div>
      <div>
        <div className="flex bg-suc">
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Name</div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Actions</div>
        </div>
        <DepartmentList
          displayName="Last created"
          list={ lastDepartments }
          setDepartments={ setLastDepartments } />
        <DepartmentList
          displayName="Department list"
          list={ departments }
          setDepartments={ setDepartments }>
            Loading...
        </DepartmentList>
      </div>
      {
        modalOpened && <DepartmentCreateModal
                          setModalOpened={ setModalOpened }
                          createDepartment={ createDepartment } />
      }
    </div>
  )
}
