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
    <div className="modalbase">
      <div className="modal">
        <div className="flex fjc-b bg-suc pd10 fc-lgt">
          <div>Create Department</div>
          <div onClick={ () => setModalOpened(false) }>X</div>
        </div>
        <form className="flex mg20" onSubmit={ handleSubmit }>
          <div className="fl1 flex fl-dir">
            <label className="mg10-b">Name</label>
            <input type="text" name="name" />
            <div className="flex fjc-r mg30-t mg10-b">
              <button className="btn-light">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeCreateModal;