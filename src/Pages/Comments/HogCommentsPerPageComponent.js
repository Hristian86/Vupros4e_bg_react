import React from 'react';
import CommentsPerPageComponent from './CommentsPerPageComponent';

const HogCommentsPerPageComponent = ({ currentPageNavigation, setCurrentPage, commentsPerPage }) => {

    return <div className="d-flex">

        {currentPageNavigation > 3 ? <CommentsPerPageComponent
            key={currentPageNavigation - 2}
            currentPageNavigation={currentPageNavigation}
            setCurrentPage={setCurrentPage}
            index={currentPageNavigation - 2}
        /> : null}

        {currentPageNavigation > 2 ? <CommentsPerPageComponent
            key={currentPageNavigation - 1}
            currentPageNavigation={currentPageNavigation}
            setCurrentPage={setCurrentPage}
            index={currentPageNavigation - 1}
        /> : null}


        <CommentsPerPageComponent
            key={currentPageNavigation}
            currentPageNavigation={currentPageNavigation}
            setCurrentPage={setCurrentPage}
            index={currentPageNavigation}
        />

        {commentsPerPage > currentPageNavigation + 1
            ? <CommentsPerPageComponent
            key={currentPageNavigation + 1}
            currentPageNavigation={currentPageNavigation}
            setCurrentPage={setCurrentPage}
            index={currentPageNavigation + 1}
            /> : null}

        {commentsPerPage > currentPageNavigation + 2
            ? <CommentsPerPageComponent
                key={currentPageNavigation + 2}
                currentPageNavigation={currentPageNavigation}
                setCurrentPage={setCurrentPage}
                index={currentPageNavigation + 2}
            /> : null}

    </div>

}

export default HogCommentsPerPageComponent;