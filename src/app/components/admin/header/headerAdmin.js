import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './HeaderAdmin.scss';

function HeaderAdmin(props) {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('token')) {
        }
    }, []);
    
    const handleClickLogout = () => {
        localStorage.removeItem('token');
        history.push("/");
    }
    return (
        <header>
            <div className="wrap-main">
                <nav>
                    <li className="logo">
                        <Link to="/">LaptopNCT</Link>
                    </li>
                    <div className="menu-info">
                        <div className="menu-right">
                            <li onClick={handleClickLogout}>Đăng xuất</li>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="clr" />
        </header>
    );
}

export default HeaderAdmin;