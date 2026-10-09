import { useId } from 'react';
import { useField } from 'formik';
export default function FormField({ label, ...props }) {
  const id = useId();
  const [field, meta] = useField(props);
  const invalid = meta.touched && Boolean(meta.error);
  return <div className="field"><label htmlFor={id}>{label}</label><input {...field} {...props} id={id} aria-invalid={invalid} aria-describedby={invalid ? `${id}-error` : undefined} />{invalid && <span className="error" id={`${id}-error`}>{meta.error}</span>}</div>;
}
