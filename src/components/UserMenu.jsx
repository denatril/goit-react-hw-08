import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectUser } from '../redux/auth/selectors';
import { logOut } from '../redux/auth/operations';
export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [busy, setBusy] = useState(false);
  async function handleLogout() {
    setBusy(true);
    try { await dispatch(logOut()).unwrap(); }
    catch (error) { toast.error(error); }
    finally { setBusy(false); }
  }
  return <div className="user-menu"><span>Hello, {user.name}</span><button className="secondary" disabled={busy} onClick={handleLogout}>{busy ? 'Signing out…' : 'Sign out'}</button></div>;
}
