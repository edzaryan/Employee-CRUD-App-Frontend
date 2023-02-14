import React from "react"
import Employee from "./Employee"

export default function EmployeeList({ list, setEmployees }) {
  return (
    <div className="mg10-t">
      {
        list.map(employee => <Employee key={ employee.id } employee={ employee } />)
      }
    </div>
  )
}