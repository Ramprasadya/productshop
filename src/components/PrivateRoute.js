import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("user_token");

        if (!token) {
            // Redirect to login page if token is null
            navigate("/login");
        }
    }, []);

    // Render Outlet for authenticated users
    return <Outlet />;
};

export default PrivateRoute;
