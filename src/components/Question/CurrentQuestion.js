import React from 'react';
import './CurrentQuestion.css';

const CurrentQuestion = ({ id, image, createdOn, userName, question }) => {
    return <div className="media w-100">
        <div className="media-body">

            <div className="row">
                <div className="col-4">
                    <img class="mr-3" className="question__image" src={image} />
                </div>
                <div className="col-9">
                    <div>Question {question} </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-6">
                    <i className="fa fa-calendar" aria-hidden="true"></i> {createdOn}
                </div>

                <div className="col-6 text-right">
                    <i className="fa fa-user"></i> {userName}
                </div>
            </div>
            <hr />
            <div>
                <div className="d-flex justify-content-between">
                    <h3>Glasuvane za aktualniq vupros <i className="fa fa-arrow-right"></i></h3>
                    <form id="votesForm" method="post">
                        <input type="hidden" />
                    </form>

                    <div className="d-flex justify-content-end vote-container">
                        <span className="mr-3 text-danger" id="errorField"></span>
                        <div className="mr-3">
                            <i data-toggle="tooltip"
                                data-placement="bottom"
                                title="Like"
                                onClick="upVote(@Model.Id)"
                                id="upVoteIcont"
                                className="fa fa-thumbs-up @upVote hover-button-type"></i>
                        </div>
                        <div id="votesCount" className="mr-4 text-right">
                            @Model.VotesCount
                    </div>
                        <div className="">
                            <i data-toggle="tooltip"
                                data-placement="bottom"
                                title="Un like"
                                id="downVoteIcont"
                                onClick="downVote(@Model.Id)"
                                className="fa fa-thumbs-down @downVote hover-button-type"></i>
                        </div>

                    </div>
                </div>

            </div>
            <hr />
        </div>
    </div>

}

export default CurrentQuestion;