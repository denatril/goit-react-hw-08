import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/filters/selectors';
import { changeFilter } from '../redux/filters/slice';
export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return <div className="field"><label htmlFor="contact-filter">Search contacts</label><input id="contact-filter" type="search" placeholder="Name or phone number" value={filter} onChange={event => dispatch(changeFilter(event.target.value))} /></div>;
}
