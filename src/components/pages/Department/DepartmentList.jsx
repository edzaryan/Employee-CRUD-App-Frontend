import React from "react"
import Department from "./Department"
import Loader from "../form/Loader";

export default function DepartmentList({ list, setDepartments }) {
  return (
    <div className="mg10-t">
      {
        list.length !== 0 ?
          list.map(department => <Department key={ department.id } dep={ department } setDepartments={ setDepartments } />) :
          <Loader />
      }
    </div>
  )
}