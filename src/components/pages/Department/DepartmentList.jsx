import React from "react"
import Department from "./Department"

export default function DepartmentList({ displayName, list, setDepartments, children }) {
  return (
    <div>
      {
        list.length !== 0 ?
          <>
            <div className="mg10-t">{ displayName }</div>
            <div className="mg10-t">
              {
                list.map(department => <Department key={ department.id } dep={ department } setDepartments={ setDepartments } />)
              }
            </div>
          </> :
          <>{ children }</>
      }
    </div>
  )
}