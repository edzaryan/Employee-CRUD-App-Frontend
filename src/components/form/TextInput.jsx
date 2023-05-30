import React, { useState } from "react";

export default function TextInput({ field, displayName, initialValue, updateEmployee }) {
  const [isFormOpened, setFormOpened] = useState(false)
  const [v, setV] = useState(initialValue)

  const onCancel = e => {
    e.preventDefault()
    setV(initialValue)
    setFormOpened(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateEmployee(field, v)
    setFormOpened(false)
  }

  return (
    <div className="mg10-b">
      <label className="fw8 fs17" htmlFor={ displayName }>{ displayName }</label>
      {
        isFormOpened ?
          <form className="flex mg5-t" onSubmit={ handleSubmit }>
            <input type="text" id={ displayName } name={ field } className="fl1" value={ v } onChange={ e => setV(e.target.value) }/>
            <div className="flex">
              <button className="btn btn-light mg10-l pd10" onClick={ onCancel }>
                <span className="material-symbols-outlined">close</span>
              </button>
              <button className="btn btn-primary mg10-l pd10">
                <span className="material-symbols-outlined">done</span>
              </button>
            </div>
          </form> :
          <div className="flex mg5-t">
            <div className="fl1 ptb10" onDoubleClick={ () => setFormOpened(true) }>{ v }</div>
            <button className="pd10 btn btn-light" onClick={ () => setFormOpened(true) }>
              <span className="material-symbols-outlined">edit</span>
            </button>
          </div>
      }
    </div>
  )
}
