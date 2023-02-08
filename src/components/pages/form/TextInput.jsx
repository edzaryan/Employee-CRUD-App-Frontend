import React, {useState} from 'react';

export default function TextInput({ field, displayName, initialValue, updateEmployee }) {
  const [isFormOpened, setFormOpened] = useState(false)
  const [v, setV] = useState(initialValue)

  function onCancel(e) {
    e.preventDefault()

    setV(initialValue)
    setFormOpened(false)
  }

  function handleSubmit(e) {
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
            <input
              type="text"
              id={ displayName }
              name={ field }
              className="fl1 brd1 pd10 rad3"
              value={ v }
              onChange={ e => setV(e.target.value) }
            />
            <div>
              <button
                className="bg-wht brd1 fc-drk mg10-l rad3 pd10"
                onClick={ onCancel }>
                  Cancel
              </button>
              <button
                className="fc-lgt bg-prm mg10-l rad3 pd10">
                  Apply
              </button>
            </div>
          </form> :
          <div className="flex mg5-t">
            <div
              className="fl1 ptb10"
              onDoubleClick={ () => setFormOpened(true) }>
                { v }
            </div>
            <button
              className="pd10 rad3 bg-wht brd1"
              onClick={ () => setFormOpened(true) }>
                Edit
            </button>
          </div>
      }
    </div>
  )
}
