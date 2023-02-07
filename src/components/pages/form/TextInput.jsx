import React, {useState} from 'react';

export default function TextInput({ field, displayName, initialValue, updateEmployee }) {

  const [isFormOpened, setFormOpened] = useState(false)
  const [v, setV] = useState(initialValue)

  const handleSubmit = e => {
    e.preventDefault()
    setFormOpened(false)
    updateEmployee(field, v)
  }

  return (
    <form onSubmit={ handleSubmit } className="mg20-b">
      <label className="fw8 fs17">{ displayName }</label>
      <div className="" onDoubleClick={ () => setFormOpened(true) }>
        {
          isFormOpened ?
            <input
              type="text"
              name={ field }
              className="w100 brd1 pd10 mg10-t"
              value={ v }
              onChange={ e => setV(e.target.value) } /> :
            <div className="ptb10 fl1">{ v }</div>
        }
      </div>
    </form>
  )
}
