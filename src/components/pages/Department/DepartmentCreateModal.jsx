import React from 'react';

function EmployeeCreateModal({ setModalOpened, createDepartment }) {

  const handleSubmit = e => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const values = Object.fromEntries(data.entries())

    createDepartment(values)
    setModalOpened(false)
  };

  return (
    <div className="pos-abs pos-t0 pos-r0 pos-l0 pos-b0 bg-lgt base">
      <div className="employeeModal bg-lgt rad3">
        <div className="flex fjc-b bg-suc pd10 fc-lgt">
          <div>Create Department</div>
          <div onClick={ () => setModalOpened(false) }>X</div>
        </div>
        <form className="flex mg20" onSubmit={ handleSubmit }>
          <div className="fl1 flex fl-dir">
            <label className="mg10-b">Name</label>
            <input type="text" name="name" className="pd10 rad3" />
            <div className="flex fjc-r mg30-t mg10-b">
              <button className="btn btn-light">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeCreateModal;