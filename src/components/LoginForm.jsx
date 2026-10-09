import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import FormField from './FormField';
const schema = Yup.object({ email: Yup.string().trim().email('Enter a valid email address.').required('Email is required.'), password: Yup.string().required('Password is required.') });
export default function LoginForm() {
  const dispatch = useDispatch();
  return <Formik initialValues={{ email: '', password: '' }} validationSchema={schema} onSubmit={async (values, { setStatus }) => {
    setStatus(null);
    try { await dispatch(logIn({ ...values, email: values.email.trim() })).unwrap(); }
    catch (error) { setStatus(error); }
  }}>{({ isSubmitting, status }) => <Form noValidate><FormField label="Email" name="email" type="email" autoComplete="email" /><FormField label="Password" name="password" type="password" autoComplete="current-password" />{status && <p role="alert" className="error">{status}</p>}<button disabled={isSubmitting} type="submit">{isSubmitting ? 'Signing in…' : 'Sign in'}</button></Form>}</Formik>;
}
