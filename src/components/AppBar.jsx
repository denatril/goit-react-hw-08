import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import ThemeToggle from './ThemeToggle';
export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <header className="app-bar"><Navigation /><div className="header-actions">{isLoggedIn ? <UserMenu /> : <AuthNav />}<ThemeToggle /></div></header>;
}
