import Department from "./Department"
import React from "react"

export default function DepartmentList({ displayName, list, setDepartments, children }) {
  return (
    <div>
      {
        list.length !== 0 ?
        <>
          <div className="mtb10">{ displayName }</div>
          <div className="mg10-t">
            {
              list.map(dep => <Department key={ dep.id } dep={ dep } setDepartments={ setDepartments } />)
            }
          </div>
        </> :
        <>{ children }</>
      }
    </div>
  )
}