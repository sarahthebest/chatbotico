import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ auth }) => {
    return auth.token && auth.user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
