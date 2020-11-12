import React from 'react';
import CommentsPerPageComponent from './CommentsPerPageComponent';

const HogCommentsPerPageComponent = ({ currentPageNavigation, setCurrentPage, commentsPerPage }) => {

    return <div className="d-flex">


        {currentPageNavigation > 6 ? <CommentsPerPageComponent
            key={currentPageNavigation - 5}
            currentPageNavigation={currentPageNavigation}
            setCurrentPage={setCurrentPage}
            index={currentPageNavigation - 5}
        /> : null}

        {currentPageNavigation > 5 ? <CommentsPerPageComponent
            key={currentPageNavigation - 4}
            currentPageNavigation={currentPageNavigation}
            setCurrentPage={setCurrentPage}
            index={currentPageNavigation - 4}
        /> : null}

        {currentPageNavigation > 4 ? <CommentsPerPageComponent
            key={currentPageNavigation - 3}
            currentPageNavigation={currentPageNavigation}
            setCurrentPage={setCurrentPage}
            index={currentPageNavigation - 3}
        /> : null}

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

        {commentsPerPage > currentPageNavigation + 3
            ? <CommentsPerPageComponent
                key={currentPageNavigation + 3}
                currentPageNavigation={currentPageNavigation}
                setCurrentPage={setCurrentPage}
                index={currentPageNavigation + 3}
            /> : null}

        {commentsPerPage > currentPageNavigation + 4
            ? <CommentsPerPageComponent
                key={currentPageNavigation + 4}
                currentPageNavigation={currentPageNavigation}
                setCurrentPage={setCurrentPage}
                index={currentPageNavigation + 4}
            /> : null}

        {commentsPerPage > currentPageNavigation + 5
            ? <CommentsPerPageComponent
                key={currentPageNavigation + 5}
                currentPageNavigation={currentPageNavigation}
                setCurrentPage={setCurrentPage}
                index={currentPageNavigation + 5}
            /> : null}

    </div>

}

export default HogCommentsPerPageComponent;