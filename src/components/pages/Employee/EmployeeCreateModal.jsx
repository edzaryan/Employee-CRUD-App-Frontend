import React, {useState} from 'react'
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import * as Yup from "yup";
import TextField from "../../form/TextField";
import SelectField from "../../form/SelectField";

function EmployeeCreateModal({ setModalOpened, createEmployee }) {

  return (
    <div className="modalbase">
      <div className="modal">
        <div className="header">
          <div>Create Employee</div>
          <div onClick={ () => setModalOpened(false) }>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>

        <Formik
          initialValues={{ name: '', surname: '', department: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, 'Must be 2 or more characters')
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            surname: Yup.string()
              .min(2, 'Must be 2 or more characters')
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            department: Yup.string()
              .required('Required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            createEmployee(values)
            setSubmitting(false)
          }}>
          {
            formik => {
              return (<Form className="flex fl-dir pd20">
                <TextField field="name" displayName="Name" />
                <TextField field="surname" displayName="Surname" />
                <SelectField field="department" displayName="Department" />
                <div className="flex fjc-r mg10-t">
                  <button disabled={ !formik.isValid } className="btn-light" type="submit">Create</button>
                </div>
              </Form>)
            }
          }
        </Formik>
      </div>
    </div>
  )
}

export default EmployeeCreateModal