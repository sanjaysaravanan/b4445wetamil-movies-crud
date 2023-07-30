import './App.css'
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store/store';
import Login from './pages/Login';
import Counter from './pages/Counter';
import Home from './pages/Home';

import UserInfo from './pages/UserInfo';

import ProtectedPage from './ProtectedPage';



function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="counter" element={<ProtectedPage element={<Counter />} />} />
          <Route path="account" element={<ProtectedPage element={<UserInfo />} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
