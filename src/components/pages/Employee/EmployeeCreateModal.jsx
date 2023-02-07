import React, {useState} from 'react';
import './EmployeeCreateModal.css';

function EmployeeCreateModal({ setModalOpened, createEmployee }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    createEmployee(values)
    setModalOpened(false)
  };

  return (
    <div className="pos-abs pos-t0 pos-r0 pos-l0 pos-b0 bg-lgt base">
      <div className="employeeModal bg-lgt">
        <div className="flex fjc-b bg-suc pd10 fc-lgt">
          <div>Create Employee</div>
          <div onClick={ () => setModalOpened(false) }>X</div>
        </div>
        <form className="flex mg20" onSubmit={ handleSubmit }>
          <div className="img mg20-r"></div>
          <div className="fl1 flex fl-dir">
            <label className="mg10-b">Name</label>
            <input type="text" name="name" className="pd10" />
            <label className="mtb10">Surname</label>
            <input type="text" name="surname" className="pd10" />
            <label className="mtb10">Department</label>
            <select className="pd10" name="department">
              <option value="">--Choose department--</option>
              <option value="1">Java</option>
              <option value="2">.Net</option>
              <option value="3">Javascript</option>
            </select>
            <div className="flex fjc-r mg30-t mg10-b">
              <button className="fc-lgt pd10 bg-lgt brd1 fc-drk">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeCreateModal;