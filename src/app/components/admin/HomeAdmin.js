import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './body/scss/HomeAdmin.scss';
function HomeAdmin(props) {
    return (
        <section className="home-admin">
            <div className="home-left">
                <Link to="/">Home</Link>
                <Link to="/admin/user">USER</Link>
                <Link to="/admin/product">PRODUCT</Link>
                <Link to="/admin/category">CATEGORY</Link>
            </div>    
            <div className="home-right">
                Home Right.
            </div>

        </section>
    );
}

export default HomeAdmin;