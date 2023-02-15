import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import TextInput from "../form/TextInput";
import SelectInput from "../form/SelectInput";

function EmployeeDetails() {
  const [employee, setEmployee] = useState(null)
  const [department, setDepartments] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  useEffect(() => {
    Promise.all([
      axios.get(`/employee/${id}`).then(res => res.data),
      axios.get(`/department`).then(res => res.data)
    ]).then(([employeeData, departmentData]) => {
      setEmployee(employeeData)
      setDepartments(departmentData)
    })
  }, [id])

  function handleChange(name, value) {
    axios
      .patch(`/employee/${id}`, { [name]: value })
      .catch(err => console.log(err.message()))
  }

  function handleDelete() {
    axios
      .delete(`/employee/${id}`)
      .then(res => {
        goBack()
      })
      .catch(err => console.log(err.message()))
  }

  return (
    <div>
      <div className="flex fjc-b">
        <button onClick={ goBack } className="btn btn-link">
          <span className="material-symbols-outlined">arrow_back_ios</span>Go back
        </button>
        <button onClick={ handleDelete } className="btn btn-danger">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div className="flex fjc-b mg20-t">
        <div className="flex fl1">
          {
            employee ?
              <>
                <div className="profile">IMAGE</div>
                <div className="fl1 flex fl-dir mg20-l">
                  <div className="fs24 fw8 mg20-b">Employee Details</div>
                  <TextInput field="name" displayName="Name" updateEmployee={ handleChange } initialValue={ employee.name } />
                  <TextInput field="surname" displayName="Surname" updateEmployee={ handleChange } initialValue={ employee.surname } />
                  <SelectInput field="department" displayName="Department" updateEmployee={ handleChange } initialValue={ employee.department } list={ department }/>
                </div>
              </> :
              <div>Loading...</div>
          }
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails