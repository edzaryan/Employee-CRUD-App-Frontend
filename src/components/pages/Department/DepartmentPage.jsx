import React, {useEffect, useState} from 'react'
import axios from "axios"
import Department from "./Department";
import DepartmentCreateModal from "./DepartmentCreateModal";

export default function DepartmentPage() {
  const [modalOpened, setModalOpened] = useState(false)
  const [departments, setDepartments] = useState(null)
  const [lastDepartment, setLastDepartment] = useState(null)

  useEffect(() => {
    axios
      .get('/department')
      .then(res => setDepartments(res.data))
      .catch(err => console.log(err.message))
  }, [])

  const createDepartment = dep => {
    axios
      .post('/department', dep)
      .then(res => {
        lastDepartment && setDepartments(oldDeps => [lastDepartment, ...oldDeps])
        setLastDepartment(res.data)
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
        <div>
          {
            lastDepartment && <>
                                <div className="mtb10">Last created</div>
                                <div className="flex faic brd1 mg5-b">
                                  <div className="fl1 pd5">{ lastDepartment.name }</div>
                                  <div className="fl1 pd5">
                                    <button className="pd10 bg-lgt brd1 rad3 mg5-r">Edit</button>
                                    <button className="pd10 md5-l bg-dgr fc-wht rad3" onClick={
                                      () => {
                                        setLastDepartment(null)
                                      }
                                    }>Delete</button>
                                  </div>
                                </div>
                              </>
          }
        </div>
        <div>
          <div className="mtb10">Department List</div>
          <div className="mg10-t">
            {
              departments ?
                departments.map(dep => <Department key={ dep.id } dep={ dep } setDepartments={ setDepartments } />) :
                <div>Loading...</div>
            }
          </div>
        </div>
      </div>
      {
        modalOpened && <DepartmentCreateModal
                          setModalOpened={ setModalOpened }
                          createDepartment={ createDepartment } />
      }
    </div>
  )
}
