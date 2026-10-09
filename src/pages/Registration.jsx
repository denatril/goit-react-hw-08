import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
export default function Registration() { return <section className="panel auth-panel"><span className="eyebrow">STAY CONNECTED</span><h1>Create account</h1><p>Make room for your personal connections.</p><RegistrationForm /><p>Already have an account? <Link to="/login">Sign in</Link></p></section>; }
