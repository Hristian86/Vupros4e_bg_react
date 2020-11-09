import React, { useState } from 'react';
import FetchData from '../../components/AuthListener/FetchData';
import AlertProductComponent from '../../components/Allert/AlertProductcomponent';
import { useAlert } from 'react-alert';
import { useEffect } from 'react';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import { GET_ITEMS } from '../../components/ContextApi/Types';
import Loader from '../../components/Loader/Loader';
import './CommentsCreate.css';

const CommentCreate = ({ id, title, setState }) => {
    const [buttonPress, setButtonPress] = useState(false);
    const alert = useAlert();

    const [{ fetchData }, dispatch] = useStateValue();
    const [formTitle, setFormTitle] = useState("");
    const [formContent, setFromContent] = useState("");

    const fetchDataFromApi = (data) => {
        console.log("fetching...");
        dispatch({
            type: GET_ITEMS,
            fetcheData: {
                items: data.question
            },
        });
    }

    let data = {
        question: []
    };

    

    const commentHandler = async (e) => {
        const contents = document.getElementById("content");
        const titles = document.getElementById("title");
        fetchDataFromApi(data);
        e.preventDefault();
        setButtonPress(true);
        // fetch here
        const title = e.target.title.value;
        const content = e.target.content.value;
        const payload = {
            questionid: Number(id),
            title: title,
            content: content,
        }

        try {
            const result = await FetchData("api/comment", payload, "POST");
            console.log(result);
            if (result?.error || result?.errors) {
                if (result?.error.message === "Failed to fetch") {
                    alert.show(<AlertProductComponent message={"unauthorized"} />);
                    setButtonPress(false);
                } else {
                    alert.show(<AlertProductComponent message={"Invalid data"} />);
                    setButtonPress(false);
                }
            } else {
                setFormTitle("");
                setFromContent("");
                alert.show(<AlertProductComponent message={"Successfully created comment"} />);
                setButtonPress(false);

                console.log(titles);

                setState({
                    display: null
                });
            }
        } catch (e) {
            alert.show(<AlertProductComponent message={`You have voted for '${title}'`} />);
            setButtonPress(false);
        }

    }

    return <form onSubmit={commentHandler} className="container pl-2 pr-2">

        <div>
            <h2 className="mt-3 text-center">{title}</h2>
        </div>

        <input type="hidden" />

        <div>
            <label>Title</label>
            <input name="title" id="title" onChange={(e => setFormTitle(e.target.value))} value={formTitle} className="form-control" />
            <span className="text-danger"></span>
        </div>

        <div>
            <label>Content</label>
            <textarea id="textValidate" onChange={(e => setFromContent(e.target.value))} value={formContent} id="content" name="content" className="form-control"></textarea>
            <span asp-validation-for="Content"  className="text-danger"></span>
        </div>

        {buttonPress
            ? <div className="loader__style mt-3"><Loader /></div>
            : <input
                className="btn btn-outline-primary mt-3"
                type="submit"
                name="submit"
                value="Add Comment"
            />}

    </form>
}

export default CommentCreate;