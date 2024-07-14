import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store/configureStore';

interface PrivateRouteProps {
    element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    useEffect(() => {
        console.log(isAuthenticated)
    }, [])
    return isAuthenticated ? element : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;
