import React from 'react';

const CommentsPerPageComponent = ({ index, setCurrentPage }) => {

    const SetCurrentPage = () => {
        setCurrentPage(index);
    }

    return <li className="page-item hover__cursor"><span className="page-link" onClick={SetCurrentPage} >{index}</span></li>
}

export default CommentsPerPageComponent;