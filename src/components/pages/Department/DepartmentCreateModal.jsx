import React from 'react'
import * as Yup from "yup"
import { Form, Formik } from "formik"
import TextField from "../../form/TextField"

function EmployeeCreateModal({ setModalOpened, createDepartment }) {

  return (
    <div className="modalbase">
      <div className="modal">
        <div className="header">
          <div>Create Department</div>
          <div onClick={ () => setModalOpened(false) }>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, 'Must be 2 or more characters')
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            createDepartment(values)
            setSubmitting(false)
          }}>
          <Form className="flex fl-dir pd20">
            <TextField field="name" displayName="Name" />
            <div className="flex fjc-r mg10-t">
              <button className="btn-light" type="submit">Create</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default EmployeeCreateModal