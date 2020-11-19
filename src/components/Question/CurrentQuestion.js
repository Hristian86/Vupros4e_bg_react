import React, { useEffect } from 'react';
import './CurrentQuestion.css';
import getCookie from '../Cookies/GetCookie';
import { useHistory } from 'react-router';
import FetchData from '../AuthListener/FetchData';
import { useAlert } from 'react-alert';
import AlertProductComponent from '../Allert/AlertProductcomponent';

const CurrentQuestion = ({ id, title, image, createdOn, userName, question, actual, commentsCount, votesCount, negativeVotes, positiveVotes, getData }) => {

    const role = getCookie("role");
    const history = useHistory();
    const alert = useAlert();

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
        const loggedUser = getCookie("user");
        if (loggedUser) {
            const payload = {
                questionId: id,
                isUpVote: false,
            }
            const result = await FetchData("api/votes", payload, "POST");
            if (await !result?.error && await !result?.errors) {
                // Make alert result
                getData();
                alert.show(<AlertProductComponent message={`You have voted for '${title}'`} />);
            }
        } else {
            alert.show(<AlertProductComponent message={`You must be logged to vote`} />);
        }
    }

    const upVote = async () => {
        console.log("up");
        const loggedUser = getCookie("user");
        if (loggedUser) {
            const payload = {
                questionId: id,
                isUpVote: true,
            }
            const result = await FetchData("api/votes", payload, "POST");
            if (await !result?.error && await !result?.errors) {
                // Make alert result
                getData();
                alert.show(<AlertProductComponent message={`You have voted for '${title}'`} />);
            }
        } else {
            alert.show(<AlertProductComponent message={`You must be logged to vote`} />);
        }
    }

    return <div className="media w-100 mb-3 bg-white">
        <div className="media-body">

            <h3 id="time"></h3>

            <div className="row">
                {/*<div className="col-4">
                    <h2>{title}</h2>
                    <img className="mr-3" className="question__image" src={image} />
                </div>*/}

                <div>
                    {role === "Admin"
                        ? <button onClick={deleteHandle} className="btn btn-danger mt-5">Delete</button>
                        : null}

                    {role === "Admin"
                        ? <button onClick={updateHandle} className="mt-5 btn btn-warning ml-3">Change the actual question</button>
                        : null}
                </div>

                <div className="mt-3 mb-3 text-center w-100">
                    <div className="mt-3">Въпросът e: {question} </div>
                </div>

                <div className="text-right pr-sm-2 w-100">
                    {/*<button onClick={commentHandler} className="btn btn-primary">Comments</button>*/}
                </div>
            </div>
            <hr />
            {/*<div className="row">
                <div className="col-6">
                    <i className="fa fa-calendar" aria-hidden="true"></i> {createdOn}
                </div>

                <div className="col-6 text-right">
                    <i className="fa fa-comment"></i> {commentsCount}
                </div>
            </div>
            <hr />*/}
            <div>
                <div className="d-flex justify-content-between">
                    {actual === 'on' ? <h3>Гласуване за актуалният въпрос <i className="fa fa-arrow-right"></i></h3> : null}
                    <form id="votesForm" method="post">
                        <input type="hidden" />
                    </form>

                    <div className="d-flex justify-content-end vote-container">
                        <span className="mr-3 text-danger" id="errorField"></span>
                        <div className="mr-1">
                            <span>За  </span><img
                                src="./images/thumb-up.png"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Like"
                                onClick={upVote}
                                id="upVoteIcont"
                                className="fa fa-thumbs-up hover-button-type thumb__upImage" />
                        </div>
                        <div id="votesCount" className="mr-5 text-right">
                            {positiveVotes}
                        </div>
                        <div className="mr-1">
                            <span>Против </span> <img
                                src="./images/thumb-down.png"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Un like"
                                id="downVoteIcont"
                                onClick={downVote}
                                className="fa fa-thumbs-down hover-button-type thumb__downImage" />
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