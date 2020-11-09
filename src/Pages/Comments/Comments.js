import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import CommentModel from './CommentModel';
import CommentCreate from './CommentCreate';
import FetchData from '../../components/AuthListener/FetchData';
import CommentsPages from './CommentsPages';

const Comments = () => {
    const history = useHistory();
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [state, setState] = useState({
        display: null,
    });

    const getData = async (pageNum) => {
        setTimeout(async () => {
            const result = FetchData(`api/comment?id=${Number(id)}&page=${Number(pageNum)}`, null, "GET");
            if (await result) {
                console.log(await result);
                setState({
                    display: await result,
                });
            }
        }, 200);

        //if (await result === undefined) {
        //    history.push("/notfoundpage");
        //}
    }

    //useEffect(() => {
    //    // fetch
    //    getData();
    //}, []);

    const backPage = () => {
        //console.log(state?.display?.commentsCounet);
        //console.log(state?.display?.commetsPerPage);
        if (currentPage <= 1) {
            // forbid back
        } else {
            let backPage = currentPage;
            setCurrentPage(backPage -= 1);
            getData(backPage);
        }
    }

    const nextPage = () => {
        if (currentPage >= state?.display?.commetsPerPage) {

        } else {
            let nextPage = currentPage;
            nextPage = nextPage += 1
            setCurrentPage(nextPage);
            getData(nextPage);
        }

    }

    const SetPage = (number) => {
        setCurrentPage(number);
        getData(number);
    }

    if (state.display === null) {
        getData(1);
    }

    return <div>

        <span id="comentsErrors"></span>

        {state?.display?.comments
            ? state?.display?.comments.map((data, index) => (
                <div key={index}>
                    <CommentModel
                        title={data.title}
                        content={data.content}
                        createdOn={data.createdOn}
                        userName={data.userUserName}
                    />
                </div>
            ))
            : null}

        <div className="container">
            <CommentsPages
                currentPageNavigation={currentPage}
                commentsPerPage={state?.display?.commetsPerPage}
                nextPage={nextPage}
                backPage={backPage}
                setCurrentPage={SetPage}
            />
        </div>

        <CommentCreate
            setState={setState}
            id={id}
        />

    </div>
}
export default Comments;