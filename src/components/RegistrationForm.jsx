import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import FormField from './FormField';
const schema = Yup.object({ name: Yup.string().trim().min(2, 'Enter at least 2 characters.').required('Name is required.'), email: Yup.string().trim().email('Enter a valid email address.').required('Email is required.'), password: Yup.string().min(7, 'Password must be at least 7 characters.').required('Password is required.') });
export default function RegistrationForm() {
  const dispatch = useDispatch();
  return <Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={schema} onSubmit={async (values, { setStatus }) => {
    setStatus(null);
    try { await dispatch(register({ ...values, name: values.name.trim(), email: values.email.trim() })).unwrap(); }
    catch (error) { setStatus(error); }
  }}>{({ isSubmitting, status }) => <Form noValidate><FormField label="Full name" name="name" autoComplete="name" /><FormField label="Email" name="email" type="email" autoComplete="email" /><FormField label="Password" name="password" type="password" autoComplete="new-password" />{status && <p role="alert" className="error">{status}</p>}<button disabled={isSubmitting} type="submit">{isSubmitting ? 'Creating account…' : 'Create account'}</button></Form>}</Formik>;
}
