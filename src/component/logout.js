import { useEffect } from "react";
import axios from "axios";

export const Logout = () => {
    useEffect(() => {
        const handleLogout = async () => {
            try {
                await axios.post(
                    'http://localhost:8000/logout/',
                    {
                        refresh_token: localStorage.getItem('refresh_token')
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    }
                );

                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login';
            } catch (error) {
                console.log('Logout not working', error);
            }
        };

        handleLogout();
    }, []);

    return null;
};
