import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = localStorage.getItem('auth-token');
    const user = localStorage.getItem('user');
    
    return token && user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
