import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import App from './components/App';
import './index.css';
createRoot(document.getElementById('root')).render(
  <StrictMode><Provider store={store}><PersistGate loading={<p role="status">Loading…</p>} persistor={persistor}><BrowserRouter><App /></BrowserRouter></PersistGate></Provider></StrictMode>,
);
