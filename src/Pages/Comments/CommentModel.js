import React from 'react';

const CommentModel = ({ content, title, createdOn, userName }) => {

    return <div className="container mt-1">
        <div className="row">
            <div className="col-6">
            <i className="fa fa-user pt-1"></i> {userName}
            </div>
            <div className="col-6 text-right">
            <i className="fa fa-calendar pt-1 text-right" aria-hidden="true"></i> {new Date(createdOn).toUTCString()}
            </div>
        </div>
        <div className="media pl-sm-5 ml-sm-5 mt-2">


            <div className="media-body row">
                {/*<h1 className="mt-0">{title}</h1>*/}
                <div dangerouslySetInnerHTML={{ __html: content }} />

                {/*<div className="col-7">
                </div>*/}


                {/*<div className="text-right col-5">
                    
                </div>*/}
            </div>


        </div>

        <hr />
    </div>
}

export default CommentModel;