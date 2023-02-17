import React from "react";

export default function RemoveDialog({ name, type, setDialogOpened, handleDelete }) {

  return (
    <div className="modalbase">
      <div className="modal">
        <div className="header">
          <div>Remove { type }</div>
          <div onClick={ () => setDialogOpened(false) }>
            <span className="material-symbols-outlined" onClick={ () => setDialogOpened(false) }>close</span>
          </div>
        </div>
        <div className="mg20 pd5-b">
          <div>Are you sure you want to remove { name }</div>
          <div className="flex fjc-r mtb10">
            <button className="btn btn-light mg10-r" onClick={ () => setDialogOpened(false) }>Cancel</button>
            <button className="btn btn-primary" onClick={ handleDelete }>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}