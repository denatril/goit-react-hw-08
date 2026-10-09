import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';
export default function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(state => state.auth.token);
  if (isRefreshing || (token && !isLoggedIn)) return <p role="status">Restoring your session…</p>;
  return isLoggedIn ? Component : <Navigate to={redirectTo} replace />;
}
