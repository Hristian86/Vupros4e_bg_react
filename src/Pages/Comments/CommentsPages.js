import React from 'react';
import './CommentsPages.css';

const CommentsPages = ({ nextPage, backPage }) => {

    return <div className="d-flex justify-content-center">
        <div>
            <div aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item hover__cursor"><span className="page-link " onClick={backPage} >Previous</span></li>
                    <li className="page-item hover__cursor"><span className="page-link" onClick={nextPage} >Next</span></li>
                </ul>
            </div>
        </div>
    </div>

}

export default CommentsPages;