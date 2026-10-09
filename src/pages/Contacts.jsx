import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts, selectIsLoading, selectError } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => { dispatch(fetchContacts()); }, [dispatch]);
  return <><div className="page-heading"><div><span className="eyebrow">YOUR CONNECTIONS</span><h1>My contacts</h1></div><span className="badge">{contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}</span></div><div className="contacts-grid"><section className="panel"><h2>New contact</h2><p>Add another connection to your contact book.</p><ContactForm /></section><section className="panel"><h2>Contact list</h2><Filter />{isLoading && <p role="status">Working…</p>}{error && <div role="alert"><p className="error">{error}</p><button className="secondary" disabled={isLoading} onClick={() => dispatch(fetchContacts())}>Reload contacts</button></div>}<ContactList /></section></div></>;
}
