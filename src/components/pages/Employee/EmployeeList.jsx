import React from "react"
import Employee from "./Employee"

export default function EmployeeList({ displayName, list, setEmployees, children }) {
  return (
    <div>
      {
        list.length !== 0 ?
          <>
            <div className="mg10-t">{ displayName }</div>
            <div className="mg10-t">
              {
                list.map(employee => <Employee key={ employee.id } employee={ employee } setEmployees={ setEmployees } />)
              }
            </div>
          </> :
          <>{ children }</>
      }
    </div>
  )
}