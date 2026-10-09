import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
export default function Login() { return <section className="panel auth-panel"><span className="eyebrow">WELCOME BACK</span><h1>Sign in</h1><p>Your contacts are right where you left them.</p><LoginForm /><p>New here? <Link to="/register">Sign up</Link></p></section>; }
