import React from 'react';

function EmployeeCreateModal({ setModalOpened, createEmployee }) {

  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());

    createEmployee(values)
    setModalOpened(false)
  };

  return (
    <div className="modalbase">
      <div className="modal">
        <div className="header">
          <div>Create Employee</div>
          <div onClick={ () => setModalOpened(false) }>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
        <form className="flex mg20" onSubmit={ handleSubmit }>
          <div className="img mg20-r"></div>
          <div className="fl1 flex fl-dir">
            <label className="mg10-b">Name</label>
            <input type="text" name="name" />
            <label className="mtb10">Surname</label>
            <input type="text" name="surname" />
            <label className="mtb10">Department</label>
            <select name="department">
              <option value="">--Choose department--</option>
              <option value="1">Java</option>
              <option value="2">.Net</option>
              <option value="3">Javascript</option>
            </select>
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