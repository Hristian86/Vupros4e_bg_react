import React from 'react';

const CommentsPerPageComponent = ({ currentPageNavigation, index, setCurrentPage }) => {

    const SetCurrentPage = () => {
        setCurrentPage(index);
    }

    return <li className={currentPageNavigation === index
        ? "page-item active hover__cursor"
        : "page-item hover__cursor"}><span className="page-link" onClick={SetCurrentPage} >{index}</span></li>
}

export default CommentsPerPageComponent;