import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
