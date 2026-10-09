import { NavLink } from 'react-router-dom';
export default function AuthNav() { return <nav aria-label="Account"><NavLink to="/login">Sign in</NavLink><NavLink className="nav-signup" to="/register">Sign up</NavLink></nav>; }
