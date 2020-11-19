import React, { useEffect } from 'react';
import CurrentQuestion from '../../components/Question/CurrentQuestion';
import FetchData from '../../components/AuthListener/FetchData';
import { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import Comments from '../Comments/Comments';

const ForumPage = () => {
    const [apiData, setApiData] = useState({});
    const [active, setActive] = useState({});

    const getData = async () => {
        const result = await FetchData("api/questionapi", null, "GET");
        console.log("Hereeeee");
        //console.log(result);
        if (result && !result.error && !result.errors) {
            const res = JSON.parse(result.geoLocation);
            //console.log(res);
            //setApiData({
            //    questions: result.question.questions
            //});
            let active = result.question.questions.filter(data => {
                if (data.isActual === "on") {
                    return data;
                }
            })
            console.log(active);
            setActive({
                active: active,
            })
            //clearInterval(interval);
            console.log(apiData.questions);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const ActiveComment = (dataApi) => {
        
    }

    return <div className="container-fluid bg-light">

        <div className="container-fluid" >

            {/*{apiData?.questions !== undefined ? apiData?.questions?.map((data, index) => (
                <div key={index} className="">

                    <CurrentQuestion
                        title={data?.title}
                        getData={getData}
                        id={data?.id}
                        negativeVotes={data?.negativeVotes}
                        positiveVotes={data?.positiveVotes}
                        title={data?.title ? data.title : null}
                        votesCount={data.votesCount}
                        commentsCount={data?.commentsCount}
                        actual={data?.isActual}

                        image={data?.imageUrl ? data.imageUrl : null}
                        userName={"go6o " + index ? index : null + 1}
                        createdOn={new Date(data?.createdOn).toUTCString() ? new Date(data?.createdOn).toUTCString() : null}
                        question={data?.description ? data?.description : null}

                    />


                </div>
            )) : <div className="text-center"><Loader /></div>}*/}
            
            
            {active?.active  ? 

                <Comments
                    ids={active?.active[0]?.id}
                />

                :
                <div className="text-center">
                    <Loader />
                </div>}

        </div>
    </div>
}
export default ForumPage;