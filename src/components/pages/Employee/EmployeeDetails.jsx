import React, {useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import './EmployeeDetails.css'
import TextInput from "../form/TextInput";
import SelectInput from "../form/SelectInput";

function EmployeeDetails() {
  const [employee, setEmployee] = useState(null)
  const { id } = useParams()

  useState(() => {
    axios
      .get(`/employee/${id}`)
      .then(res => setEmployee(res.data))
      .catch(err => console.log(err.message()))
  })

  function updateEmployee(name, value) {
    axios
      .patch(`/employee/${id}`, { [name]: value })
      .then(res => console.log('***'))
      .catch(err => console.log(err.message()))
  }

  return (
    <div>
      <div className="flex fjc-b">
        <div className="flex fl1">
          {
            employee && <>
              <div className="profile">IMAGE</div>
              <div className="fl1 flex fl-dir mg20-l">
                <div className="fs24 fw8 mg20-b">Employee Details</div>
                <TextInput
                  field="name"
                  displayName="Name"
                  updateEmployee={ updateEmployee }
                  initialValue={ employee.name } />
                <TextInput
                  field="surname"
                  displayName="Surname"
                  updateEmployee={ updateEmployee }
                  initialValue={ employee.surname } />
                <SelectInput
                  field="department"
                  displayName="Department"
                  updateEmployee={ updateEmployee() }
                  initialValue={ employee.department } />
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails