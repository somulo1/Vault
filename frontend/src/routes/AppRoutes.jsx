import { Routes, Route } from 'react-router-dom';
import DigitalLoans from '../pages/VaultInuaLoan/DigitalLoans';
import MobileLoans from '../pages/VaultInuaLoan/MobileLoans';
import VaultInuaLoans from '../pages/VaultInuaLoan/VaultInuaLoans';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      
      {/* Loan Routes */}
      <Route path="/loans/digital" element={<DigitalLoans />} />
      <Route path="/loans/mobile" element={<MobileLoans />} />
      <Route path="/loans/vaultinua" element={<VaultInuaLoans />} />
      
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
