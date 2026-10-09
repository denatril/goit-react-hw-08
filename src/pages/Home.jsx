import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <section className="hero"><span className="eyebrow">YOUR PERSONAL CONTACT BOOK</span><h1>Your favorite people,<br /><span>all in one place.</span></h1><p>Keep your numbers organized and find the people you need. Your personal contact book, always within reach.</p><Link className="button" to={isLoggedIn ? '/contacts' : '/register'}>{isLoggedIn ? 'Open my contacts' : 'Create your contact book'} <span aria-hidden="true">→</span></Link><div className="features"><div><b>01 / Personal</b><p>A contact list that belongs to you.</p></div><div><b>02 / Organized</b><p>Find anyone by name or number.</p></div><div><b>03 / Simple</b><p>Add new contacts in just a few steps.</p></div></div></section>;
}
