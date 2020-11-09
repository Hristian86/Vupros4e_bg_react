import React from 'react';
import './CommentsPages.css';
import CommentsPerPageComponent from './CommentsPerPageComponent';

const CommentsPages = ({currentPageNavigation, setCurrentPage, commentsPerPage, nextPage, backPage }) => {

    //const CurrentPage = (index) => {
    //    setCurrentPage(index + 1);
    //}

    return <div className="d-flex justify-content-center">
        <div>
            <div aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item hover__cursor"><span className="page-link " onClick={backPage} >Previous</span></li>

                    {Array(commentsPerPage)
                        .fill()
                        .map((_, index) => (
                            <CommentsPerPageComponent
                                setCurrentPage={setCurrentPage}
                                index={index + 1}
                            />
                        ))}

                    <li className="page-item hover__cursor"><span className="page-link" onClick={nextPage} >Next</span></li>
                </ul>
            </div>
        </div>
    </div>

}

export default CommentsPages;