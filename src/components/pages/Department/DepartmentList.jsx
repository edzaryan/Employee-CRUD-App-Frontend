import React from "react"
import Department from "./Department"

export default function DepartmentList({ list, setDepartments }) {
  return (
    <div className="mg10-t">
      {
        list.map(department => <Department key={ department.id } dep={ department } setDepartments={ setDepartments } />)
      }
    </div>
  )
}