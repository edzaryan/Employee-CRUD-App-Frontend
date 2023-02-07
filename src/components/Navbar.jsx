import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="brd1 pos-fix pos-t0 pos-r0 pos-l0 flex fjc-c pos-z2 bg-lgt">
      <div className="w800 flex">
        <Link to="/" className="pd10">Home</Link>
        <Link to="/employee" className="pd10">Employee</Link>
        <Link to="/department" className="pd10">Department</Link>
      </div>
    </div>
  )
}
