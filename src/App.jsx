import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import CartPage from './pages/cart/CartPage';
import AuthLayout from './auth/AuthLayout';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';
import LoginWithMobile from './auth/LoginWithMobile';

function App() {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="cart" element={<CartPage />} />

        {/* Auth Pages Inside Main Layout */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp-login" element={<LoginWithMobile />} />
        </Route>


      </Route>
    </Routes>
  );
}

export default App;
