import React, {useState} from 'react'

export default function SelectInput({ field, displayName, initialValue, updateEmployee, list }) {
  const [department, setDepartment] = useState(initialValue)

  function handleChange(e) {
    updateEmployee(field, e.target.value)
    setDepartment(e.target.value)
  }

  return (
    <div className="mg20-b">
      <label className="fw8 fs17">{ displayName }</label>
      <select className="pd10 w100 mg10-t brd1 rad3" onChange={ handleChange } value={ department }>
        <option value="">-- Choose Department --</option>
        {
          list && list.map(dep => <option key={ dep.id } value={ dep.id }>{ dep.name }</option>)
        }
      </select>
    </div>
  )
}
