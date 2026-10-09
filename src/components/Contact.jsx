import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { deleteContact } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  async function handleDelete() {
    if (!window.confirm(`Delete ${contact.name} from your contacts?`)) return;
    try { await dispatch(deleteContact(contact.id)).unwrap(); toast.success('Contact deleted.'); }
    catch (error) { toast.error(error); }
  }
  return <li className="contact"><span className="avatar" aria-hidden="true">{contact.name.slice(0, 1).toLocaleUpperCase('en')}</span><div className="contact-details"><strong>{contact.name}</strong><a href={`tel:${contact.number.replace(/[^+\d]/g, '')}`}>{contact.number}</a></div><button className="danger" disabled={isLoading} onClick={handleDelete} aria-label={`Delete ${contact.name}`}>Delete</button></li>;
}
