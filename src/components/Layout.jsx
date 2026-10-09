import AppBar from './AppBar';
export default function Layout({ children }) { return <><AppBar /><main className="container">{children}</main><footer>Contact Book · Keep your people close.</footer></>; }
