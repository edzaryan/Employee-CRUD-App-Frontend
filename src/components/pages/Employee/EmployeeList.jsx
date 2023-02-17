import React from "react"
import Employee from "./Employee"
import Loader from "../../form/Loader";

export default function EmployeeList({ list, setEmployees }) {
  return (
    <div className="mg10-t">
      {
        list.length !== 0 ?
          list.map(employee => <Employee key={ employee.id } employee={ employee } />) :
          <Loader />
      }
    </div>
  )
}