import { NavLink, Outlet } from "react-router-dom";
import React from "react";

export default function Layout() {
  return (
    <>
      <div className="brd1 pos-fix pos-t0 pos-r0 pos-l0 flex fjc-c pos-z2 bg-lgt">
        <div className="w800 flex navbar">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-active" : "" }>Home</NavLink>
          <NavLink to="/employee" className={({isActive}) => isActive ? "nav-active" : "" }>Employee</NavLink>
          <NavLink to="/department" className={({isActive}) => isActive ? "nav-active" : "" }>Department</NavLink>
        </div>
      </div>

      <Outlet />
    </>
  )
}