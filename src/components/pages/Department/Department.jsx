import React, {useState} from "react"
import axios from "axios"

export default function Department({ dep, setDepartments }) {
  const [isFormOpened, setFormOpened] = useState(false)
  const [v, setV] = useState(dep.name)

  const deleteDepartment = id => {
    axios
      .delete(`/department/${id}`)
      .catch(err => console.log(err.message()))
  }

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .patch(`/department/${dep.id}`, { name: v })
      .then(res => {
        setFormOpened(false)
      })
      .catch(err => console.log(err.message()))
  }

  const onCancel = e => {
    e.preventDefault()
    setV(dep.name)
    setFormOpened(false)
  }

  return (
    <div className="flex mg5-b pd5 brd1">
      {
        isFormOpened ?
          <form className="fl1 flex" onSubmit={ handleSubmit }>
            <div className="fl1">
              <input type="text" className="w100 brd1 pd10 rad3" value={ v } onChange={ e => setV(e.target.value) }/>
            </div>
            <div className="fl1">
              <button className="btn btn-light mg10-l" onClick={ onCancel }>Cancel</button>
              <button className="btn btn-primary mg10-l">Apply</button>
            </div>
          </form> :
          <div className="fl1 flex">
            <div className="fl1 flex faic" onDoubleClick={ () => setFormOpened(true) }>{ v }</div>
            <div className="fl1 flex">
              <button className="btn btn-light mg10-l" onClick={ () => setFormOpened(true) }>Edit</button>
              <button className="btn btn-danger mg10-l" onClick={
                () => {
                  deleteDepartment(dep.id)
                  setDepartments(oldDeps => oldDeps.filter(department => department.id !== dep.id))
                }
              }>Delete</button>
            </div>
          </div>
      }
    </div>
  )
}