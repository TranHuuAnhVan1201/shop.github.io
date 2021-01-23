import React from 'react';
import { Link } from 'react-router-dom';
import './Filter.scss';

function Filter(props) {
    return (
        <div className="filter">
            <div className="fl price">
                <label>Chọn mức giá: </label>
                <li>
                    <Link to="/gamingrender">Dưới 10 triệu</Link>
                </li>
                <li>
                    <Link to="/ultralbook">10 - 15 triệu</Link>
                </li>
                <li>
                    <Link to="/dell">15 - 20 triệu</Link>
                </li>
                <li>
                    <Link to="/hp">20 - 30 triệu</Link>
                </li>
                <li>
                    <Link to="/lenovo">30 - 40 triệu</Link>
                </li>
                <li>
                    <Link to="/lenovo">Trên 40 triệu</Link>
                </li>
                
            </div>
            <div className="fl feature">
                <span class="criteria">Bộ lọc</span>
            </div>
            <div className="fl barpage">
                <li>
                    <Link to="/new">Mới ra mắt</Link>
                </li>
                <li>
                    <Link to="/tragop">Trả góp 0%</Link>
                </li>
                <li>
                    <Link to="/justOnline">Chỉ bán Online</Link>
                </li>
            </div>
            <div className="clr"></div>
        </div>
    );
}

export default Filter;