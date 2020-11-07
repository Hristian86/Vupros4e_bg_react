import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import CommentModel from './CommentModel';
import CommentCreate from './CommentCreate';

const Comments = () => {
    const { id } = useParams();
    const [{ fetchData }, dispatch] = useStateValue();
    const [state, setState] = useState({
        display: null
    });
    let display = [];


    useEffect(() => {
        if (fetchData[0]?.questions !== undefined) {
            let displays = fetchData[0]?.questions.filter(data => {
                if (data.id == id) {
                    console.log(data.id == id);
                    setState({
                        display: data
                    });
                    return data
                }
            });
        }
    }, [fetchData]);

    return <div>

        {state?.display !== undefined
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

        <CommentCreate
            id={id}
        />

    </div>
}
export default Comments;