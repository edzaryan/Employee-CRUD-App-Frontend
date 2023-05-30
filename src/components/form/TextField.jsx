import { ErrorMessage, Field } from "formik";

export default function TextField({ field, displayName }) {
  return (
    <div className="flex fl-dir mg10-b">
      <label htmlFor={ field } className="mtb5">{ displayName }</label>
      <Field name={ field } id={ field } />
      <ErrorMessage name={ field }>{ msg => <div className="fc-dgr">{ msg }</div> }</ErrorMessage>
    </div>
  )
}