import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <nav aria-label="Main navigation"><NavLink className="brand" to="/">◈ Contact Book</NavLink>{isLoggedIn && <NavLink to="/contacts">My contacts</NavLink>}</nav>;
}
