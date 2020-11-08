import React from 'react';
import FetchData from '../../components/AuthListener/FetchData';
import AlertProductComponent from '../../components/Allert/AlertProductcomponent';
import { useAlert } from 'react-alert';

const CommentCreate = ({ id, title }) => {
    const alert = useAlert();
    const commentHandler = async (e) => {
        e.preventDefault();
        // fetch here
        const payload = {
            questionid: Number(id),
            title: e.target.title.value,
            content: e.target.content.value,
        }


        try {
            const result = await FetchData("api/comment", payload, "POST");
            console.log(result);
            if (result?.error || result?.errors) {
                if (result?.error.message === "Failed to fetch") {
                    alert.show(<AlertProductComponent message={"unauthorized"} />);
                } else {
                    alert.show(<AlertProductComponent message={"Invalid data"} />);
                }
            } else {
                alert.show(<AlertProductComponent message={"Success"} />);
                window.location.reload(false)
            }
        } catch (e) {
            alert.show(<AlertProductComponent message={"Unauthorized"} />);
        }

    }

    return <form onSubmit={commentHandler} className="container pl-2 pr-2">

        <div>
            <h2 className="mt-3 text-center">{title}</h2>
        </div>

        <input type="hidden" />

        <div>
            <label>Title</label>
            <input name="title" className="form-control" />
            <span className="text-danger"></span>
        </div>

        <div>
            <label>Content</label>
            <textarea id="textValidate" name="content" className="form-control"></textarea>
            <span asp-validation-for="Content" className="text-danger"></span>
        </div>

        <input className="btn btn-outline-primary mt-3" type="submit" name="submit" value="Add Comment" />

    </form>
}

export default CommentCreate;