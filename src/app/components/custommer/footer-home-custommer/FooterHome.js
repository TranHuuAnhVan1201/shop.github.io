import React from 'react';
import './footer.scss'
function FooterHome(props) {
    return (
        <footer>
            <div className="container">
                <p>© Copyright TGDD. Your Website 2021. All Rights Reserved.</p>
                <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#alt">Privacy</a>
                </li>
                <li className="list-inline-item">
                    <a href="#alt">Terms</a>
                </li>
                <li className="list-inline-item">
                    <a href="#alt">FAQ</a>
                </li>
                </ul>
            </div>
        </footer>
    );
}

export default FooterHome;