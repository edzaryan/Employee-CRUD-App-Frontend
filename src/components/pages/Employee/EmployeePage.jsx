import React, {useEffect, useState} from 'react'
import EmployeeCreateModal from "./EmployeeCreateModal"
import EmployeeList from "./EmployeeList"
import axios from "axios"

export default function EmployeePage() {
  const [modalOpened, setModalOpened] = useState(false)
  const [employees, setEmployees] = useState([])
  const [lastEmployees, setLastEmployees] = useState([])

  useEffect(() => {
    axios
      .get('/employee')
      .then(res => setEmployees(res.data))
      .catch(err => console.log(err.message))
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
      <div className="flex fjc-r mg10-b">
        <button className="fc-lgt pd10 bg-lgt brd1 fc-drk rad3" onClick={ () => setModalOpened(true) }>Create</button>
      </div>
      <div>
        <div className="flex bg-suc">
          <div className="fl1 ptb5 plr5"></div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Name</div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Surname</div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Department</div>
          <div className="fl1 ptb5 plr5 fw9 fc-lgt">Actions</div>
        </div>
        <div>
          <EmployeeList
            list={ lastEmployees }
            displayName="Last Created"
            setEmployees={ setLastEmployees }  />
          <EmployeeList
            list={ employees }
            displayName="Employee List"
            setEmployees={ setEmployees }>
              Loading...
          </EmployeeList>
        </div>
      </div>
      {
        modalOpened && <EmployeeCreateModal
                          setModalOpened={ setModalOpened }
                          createEmployee={ createEmployee } />
      }
    </div>
  )
}
