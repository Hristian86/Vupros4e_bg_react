import React from 'react';

const CommentModel = ({ content, title, createdOn, userName }) => {

    return <div className="container">
        <div className="media pl-sm-5 ml-sm-5 mt-5">
            
                <div className="media-body">
                    <h1 className="mt-0">{title}</h1>
                    {content}
                    <br />
                    <i className="fa fa-calendar pt-1" aria-hidden="true"></i> {createdOn}
            </div>

            <div className="">
                <i className="fa fa-user pt-1"></i> {userName}
            </div>
            </div>

            <hr />
    </div>
}

export default CommentModel;