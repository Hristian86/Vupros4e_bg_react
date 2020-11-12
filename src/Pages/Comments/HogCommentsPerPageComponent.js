import React from 'react';
import CommentsPerPageComponent from './CommentsPerPageComponent';

const HogCommentsPerPageComponent = ({ currentPageNavigation, setCurrentPage, commentsPerPage }) => {

    return <div className="d-flex">

        {commentsPerPage == currentPageNavigation ? <CommentsPerPageComponent
            key={currentPageNavigation - 3}
            currentPageNavigation={currentPageNavigation}
            setCurrentPage={setCurrentPage}
            index={currentPageNavigation - 3}
        /> : null}

        {(commentsPerPage - 1) <= currentPageNavigation ? <CommentsPerPageComponent
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

        {currentPageNavigation > 2
            ? null
            : <CommentsPerPageComponent
                key={currentPageNavigation + 2}
                currentPageNavigation={currentPageNavigation}
                setCurrentPage={setCurrentPage}
                index={currentPageNavigation + 2}
            />}

        {currentPageNavigation > 1
            ? null
            : <CommentsPerPageComponent
                key={currentPageNavigation + 3}
                currentPageNavigation={currentPageNavigation}
                setCurrentPage={setCurrentPage}
                index={currentPageNavigation + 3}
            />}

    </div>

}

export default HogCommentsPerPageComponent;