import React from 'react';
import './CurrentQuestion.css';
import getCookie from '../Cookies/GetCookie';
import { useHistory } from 'react-router';
import FetchData from '../AuthListener/FetchData';

const CurrentQuestion = ({ id, image, createdOn, userName, question, actual, commentsCount, votesCount }) => {

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
                        ? <button onClick={updateHandle} className="mt-5 btn btn-warning ml-3">Update</button>
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
                        <div className="mr-3">
                            <i data-toggle="tooltip"
                                data-placement="bottom"
                                title="Like"
                                onClick="upVote(@Model.Id)"
                                id="upVoteIcont"
                                className="fa fa-thumbs-up @upVote hover-button-type"></i>
                        </div>
                        <div id="votesCount" className="mr-4 text-right">
                            {votesCount}
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