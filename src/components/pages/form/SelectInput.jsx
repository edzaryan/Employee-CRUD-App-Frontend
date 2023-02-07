import React, {useState} from 'react';

export default function SelectInput({ field, displayName, initialValue, updateEmployee }) {
  const [isFormOpened, setFormOpened] = useState(false)
  const [department, setDepartment] = useState(initialValue)

  return (
    <div className="mg20-b">
      <label className="fw8 fs17">{ displayName }</label>
      <div className="" onDoubleClick={ () => setFormOpened(true) }>
        {
          isFormOpened ?
          <select className="pd10 w100 mg10-t brd1">
            <option value="1">.Net</option>
            <option value="2">Java</option>
            <option value="3">Javascript</option>
            <option value="4">Ruby</option>
          </select> :
          <div>{ department }</div>
        }
      </div>
    </div>
  );
}
