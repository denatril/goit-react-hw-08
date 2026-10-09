import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading, selectError } from '../redux/contacts/selectors';
import Contact from './Contact';
export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return <>{!contacts.length && !isLoading && !error && <p className="empty">No contacts to show. Add a contact or try a different search.</p>}<ul className="contact-list">{contacts.map(contact => <Contact key={contact.id} contact={contact} />)}</ul></>;
}
