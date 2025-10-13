import { Navigate, useLocation } from 'react-router-dom';

const Protect = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem('adminToken');

    if (!token) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    return children;
};

export default Protect;