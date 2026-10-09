import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Contacts from '../pages/Contacts';
export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => { dispatch(refreshUser()); }, [dispatch]);
  return <><Toaster position="top-right" toastOptions={{ style: { background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' } }} />{isRefreshing ? <p className="loading" role="status">Restoring your session…</p> : <Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Registration />} />} />
    <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
    <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
    <Route path="*" element={<section className="panel"><h1>Page not found</h1><Link to="/">Back to home</Link></section>} />
  </Routes></Layout>}</>;
}
