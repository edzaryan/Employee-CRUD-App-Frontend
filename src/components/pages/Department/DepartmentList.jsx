import React from "react"
import Department from "./Department"
import loader from "../../../icons/loader.svg";

export default function DepartmentList({ list, setDepartments }) {
  return (
    <div className="mg10-t">
      {
        list.length !== 0 ?
          list.map(department => <Department key={ department.id } dep={ department } setDepartments={ setDepartments } />) :
          <div className="flex fjc-c faic pd10">
            <img src={ loader } alt="loader" />
          </div>
      }
    </div>
  )
}