import React, { useEffect } from 'react';
import './CurrentQuestion.css';
import getCookie from '../Cookies/GetCookie';
import { useHistory } from 'react-router';
import FetchData from '../AuthListener/FetchData';

const CurrentQuestion = ({ id, image, createdOn, userName, question, actual, commentsCount, votesCount, negativeVotes, positiveVotes }) => {

    const role = getCookie("role");
    const history = useHistory();

    const commentHandler = () => {
        history.push(`/comments/${id}`);
    }

    const deleteHandle = async () => {
        const payload = {
            id: Number(id)
        };

        var deleteQuestion = prompt("Delete this question", "yes");

        if (deleteQuestion === "yes") {
            const responce = FetchData("api/deletequestion", payload, "POST");
        }
    }

    const updateHandle = () => {
        const responce = FetchData(`api/deletequestion?id=${Number(id)}`, null, "GET");
    }

    const downVote = async () => {
        console.log("down");
        const payload = {
            questionId: id,
            isUpVote: false,
        }
        const result = await FetchData("api/votes", payload, "POST");
        if (await !result?.error && await !result?.errors) {
            // Make alert result
            console.log("Success");
            window.location.reload(false)
        }
    }

    const upVote = async () => {
        console.log("up");
        const payload = {
            questionId: id,
            isUpVote: true,
        }
        const result = await FetchData("api/votes", payload, "POST");
        if (await !result?.error && await !result?.errors) {
            // Make alert result
            console.log("Success");
            window.location.reload(false)
        }
    }

    return <div className="media w-100 mb-3 bg-white">
        <div className="media-body">

            <h3 id="time"></h3>

            <div className="row">
                <div className="col-4">
                    <img className="mr-3" className="question__image" src={image} />
                </div>

                <div>
                    {role === "Admin"
                        ? <button onClick={deleteHandle} className="btn btn-danger mt-5">Delete</button>
                        : null}

                    {role === "Admin"
                        ? <button onClick={updateHandle} className="mt-5 btn btn-warning ml-3">Change the actual question</button>
                        : null}
                </div>

                <div className="col-9">
                    <div>Question {question} </div>
                </div>

                <div className="text-right pr-sm-2 w-100">
                    <button onClick={commentHandler} className="btn btn-primary">Comments</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-6">
                    <i className="fa fa-calendar" aria-hidden="true"></i> {createdOn}
                </div>

                <div className="col-6 text-right">
                    <i className="fa fa-comment"></i> {commentsCount}
                </div>
            </div>
            <hr />
            <div>
                <div className="d-flex justify-content-between">
                    {actual === 'on' ? <h3>Glasuvane za aktualniq vupros <i className="fa fa-arrow-right"></i></h3> : null}
                    <form id="votesForm" method="post">
                        <input type="hidden" />
                    </form>

                    <div className="d-flex justify-content-end vote-container">
                        <span className="mr-3 text-danger" id="errorField"></span>
                        <div className="mr-1">
                            <i data-toggle="tooltip"
                                data-placement="bottom"
                                title="Like"
                                onClick={upVote}
                                id="upVoteIcont"
                                className="fa fa-thumbs-up hover-button-type"></i>
                        </div>
                        <div id="votesCount" className="mr-4 text-right">
                            {positiveVotes}
                    </div>
                        <div className="mr-1">
                            <i data-toggle="tooltip"
                                data-placement="bottom"
                                title="Un like"
                                id="downVoteIcont"
                                onClick={downVote}
                                className="fa fa-thumbs-down hover-button-type"></i>
                        </div>
                        <div id="votesCount" className="mr-4 text-right">
                           {negativeVotes}
                        </div>
                    </div>
                </div>

            </div>
            <hr />
        </div>
    </div>

}

export default CurrentQuestion;