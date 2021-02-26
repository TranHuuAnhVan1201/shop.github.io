/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../_pagination/Pagination.scss';
function Pagination(props) {
    let { totalPages, onAddPage } = props;
    return (
        <nav className="navigation">
            <ul className="pagination">
                {
                    totalPages.map.length > 0 ? totalPages.map((value, key) => {
                        return (
                            <li onClick={() => onAddPage(value.item)} className="page-item">
                                <span className="page-link">
                                    {value.item}
                                </span>
                            </li>
                        )
                    }) : null
                }
            </ul>
        </nav>

    );
}

export default Pagination;