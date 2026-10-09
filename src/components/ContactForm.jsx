import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addContact } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import FormField from './FormField';
const schema = Yup.object({ name: Yup.string().trim().min(2, 'Enter at least 2 characters.').max(50, 'Enter no more than 50 characters.').required('Name is required.'), number: Yup.string().trim().matches(/^[+()\d\s-]+$/, 'Enter a valid phone number.').test('digits', 'Enter at least 3 digits.', value => (value?.replace(/\D/g, '').length ?? 0) >= 3).max(30, 'Enter no more than 30 characters.').required('Phone number is required.') });
export default function ContactForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return <Formik initialValues={{ name: '', number: '' }} validationSchema={schema} onSubmit={async (values, { resetForm }) => {
    try { await dispatch(addContact({ name: values.name.trim(), number: values.number.trim() })).unwrap(); resetForm(); toast.success('Contact added.'); }
    catch (error) { toast.error(error); }
  }}>{({ isSubmitting }) => <Form noValidate><FormField label="Full name" name="name" placeholder="e.g. Alex Morgan" /><FormField label="Phone number" name="number" type="tel" placeholder="e.g. +1 555 123 4567" /><button type="submit" disabled={isSubmitting || isLoading}>{isSubmitting ? 'Adding…' : '+ Add contact'}</button></Form>}</Formik>;
}
