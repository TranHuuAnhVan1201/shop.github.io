import React from 'react';
import { Link } from 'react-router-dom';
import './Need.scss';
import img1 from './../../../../../../../img/need/hoc-tap.jpg';
import img2 from './../../../../../../../img/need/do-hoa.jpg';
import img3 from './../../../../../../../img/need/mong-nhe.jpg';
import img4 from './../../../../../../../img/need/gaming.jpg';
import img5 from './../../../../../../../img/need/cao-cap.jpg';
function Need(props) {
    return (
        <div className="need"> 
            <h3 className="title">Chọn nhu cầu:</h3>
            <div className="filterBox">
                <Link to="/hoctap">
                    <img src={img1} alt="img"></img>
                    <span>Học tập - văn phòng</span>
                </Link>
                <Link to="/hoctap">
                    <img src={img2} alt="img"></img>
                     <span>Đồ họa - kỹ thuật</span>
                </Link>
                <Link to="/mongnhe">
                    <img src={img3} alt="img"></img>
                    <span>Mỏng nhẹ</span>
                </Link>
                <Link to="/gaming">
                    <img src={img4} alt="img"></img>
                    <span>Laptop Gaming</span>
                </Link>
                <Link to="/caocap">
                    <img src={img5} alt="img"></img>
                    <span>Cao cấp - sang trọng</span>
                </Link>
            </div>
        </div>
    );
}

export default Need;