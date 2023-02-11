import {Link, useNavigate} from "react-router-dom";
import React from "react";

export default function Employee({ employee }) {
  const navigate = useNavigate()

  return (
    <div onDoubleClick={ () => navigate(`/employee/${ employee.id }`) }>
      <div className="flex faic mg3-b brd1">
        <div className="fl1 ptb5 plr5 flex fjc-c">
          <div className="circle50 bg-scd"></div>
        </div>
        <div className="fl1 pd5">{ employee.name }</div>
        <div className="fl1 pd5">{ employee.surname }</div>
        <div className="fl1 pd5">{ employee.department }</div>
        <div className="fl1 pd5">
          <Link to={`${ employee.id }`} className="pd5">Details</Link>
        </div>
      </div>
    </div>
  )
}