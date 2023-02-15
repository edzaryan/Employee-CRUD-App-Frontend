import React from "react"
import Employee from "./Employee"
import loader from "../../../icons/loader.svg"

export default function EmployeeList({ list, setEmployees }) {
  return (
    <div className="mg10-t">
      {
        list.length !== 0 ?
          list.map(employee => <Employee key={ employee.id } employee={ employee } />) :
          <div className="flex fjc-c faic pd10">
            <img src={ loader } alt="loader" />
          </div>
      }
    </div>
  )
}