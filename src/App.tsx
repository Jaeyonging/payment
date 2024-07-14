import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Main } from "./routes/Main";
import { Menu } from "./routes/Menu";
import { Payment } from "./routes/Payment";
import { PayProgress } from "./routes/PayProgress";
import { AdminHome } from './routes/admin/AdminHome';
import { AdminLogin } from './routes/admin/AdminLogin';
import PrivateRoute from './components/Admin/PrivateRoute';
import './App.css';

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/admin/products" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/admin/options" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/admin/totalsales" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/admin/cardsales" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/admin/paysales" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/admin/papersales" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/admin/kiosk" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/admin/qr" element={<PrivateRoute element={<AdminHome />} />} />
        <Route path="/main" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payprogress/:type" element={<PayProgress />} />
      </Routes>
    </Suspense>
  );
}

export default App;
