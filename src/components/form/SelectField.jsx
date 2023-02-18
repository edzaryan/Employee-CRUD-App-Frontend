import { ErrorMessage, Field } from "formik";

export default function SelectField({ field, displayName }) {
  return (
    <div className="flex fl-dir mg10-b">
      <label htmlFor={ field } className="mtb5">{ displayName }</label>
      <Field component="select" name={ field } id={ field }>
        <option value="">-- Select Department --</option>
        <option value="1">Java</option>
        <option value="2">.Net</option>
        <option value="3">Ruby</option>
        <option value="4">Kotlin</option>
      </Field>
      <ErrorMessage name={ field }>{ msg => <div className="fc-dgr">{ msg }</div> }</ErrorMessage>
    </div>
  )
}