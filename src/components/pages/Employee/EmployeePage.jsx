import React, {useEffect, useState} from 'react'
import EmployeeCreateModal from "./EmployeeCreateModal"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

export default function EmployeePage() {
  const [modalOpened, setModalOpened] = useState(false)
  const [employees, setEmployees] = useState(null)
  const [lastEmployee, setLastEmployee] = useState(null)
  const navigate = useNavigate()

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
        setLastEmployee(res.data)
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
          <div>
            {
              lastEmployee && <>
                                <div className="mg10-t">Last Created</div>
                                <div className="brd1 mg10-t">
                                  <div className="flex faic">
                                    <div className="fl1 ptb5 plr5 flex fjc-c">
                                      <div className="circle50 bg-scd"></div>
                                    </div>
                                    <div className="fl1 pd5">{ lastEmployee.name }</div>
                                    <div className="fl1 pd5">{ lastEmployee.surname }</div>
                                    <div className="fl1 pd5">{ lastEmployee.department }</div>
                                    <div className="fl1 pd5">
                                      <Link to={ `${lastEmployee.id}` }>Details</Link>
                                    </div>
                                  </div>
                                </div>
                              </>
            }
          </div>
          <div>
            <div className="mg10-t">Employee List</div>
            <div className="mg10-t">
              {
                employees ? employees.map(e => (
                  <div key={ e.id } onDoubleClick={ () => navigate(`/employee/${e.id}`) }>
                    <div className="flex faic mg3-b brd1">
                      <div className="fl1 ptb5 plr5 flex fjc-c">
                        <div className="circle50 bg-scd"></div>
                      </div>
                      <div className="fl1 pd5">{ e.name }</div>
                      <div className="fl1 pd5">{ e.surname }</div>
                      <div className="fl1 pd5">{ e.department }</div>
                      <div className="fl1 pd5">
                        <Link to={`${e.id}`} className="pd5">Details</Link>
                      </div>
                    </div>
                  </div>
                )) : <div>Loading...</div>
              }
            </div>
          </div>
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
