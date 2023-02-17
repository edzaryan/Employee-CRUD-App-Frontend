import React, {useState} from "react"
import axios from "axios"
import RemoveDialog from "../../form/RemoveDialog";

export default function Department({ dep, setDepartments }) {
  const [isFormOpened, setFormOpened] = useState(false)
  const [v, setV] = useState(dep.name)
  const [isDialogOpened, setDialogOpened] = useState(false)

  const handleDelete = () => {
    axios
      .delete(`/department/${ dep.id }`)
      .then(() => {
        setDepartments(oldDeps => oldDeps.filter(department => department.id !== dep.id))
      })
      .then(() => {
        setDialogOpened(false)
      })
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
              <input type="text" className="w100" value={ v } onChange={ e => setV(e.target.value) }/>
            </div>
            <div className="fl1 flex">
              <button className="btn-light mg10-l" onClick={ onCancel }>
                <span className="material-symbols-outlined">close</span>
              </button>
              <button className="btn-primary mg10-l">
                <span className="material-symbols-outlined">done</span>
              </button>
            </div>
          </form> :
          <div className="fl1 flex">
            <div className="fl1 flex faic" onDoubleClick={ () => setFormOpened(true) }>{ v }</div>
            <div className="fl1 flex">
              <button className="btn-light mg10-l" onClick={ () => setFormOpened(true) }>
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="btn-danger mg10-l flex faic fjc-c" onClick={ () => setDialogOpened(true) }>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
      }
      {
        isDialogOpened && <RemoveDialog
                              name={ dep.name }
                              type="Department"
                              setDialogOpened={ setDialogOpened }
                              handleDelete={ handleDelete } />
      }
    </div>
  )
}