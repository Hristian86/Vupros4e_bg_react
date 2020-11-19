import React, { useState } from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import Clock from '../CountDown/Clock';
import CountDown from '../CountDown/CountDown';
import CurrentQuestion from '../Question/CurrentQuestion';
import FetchData from '../AuthListener/FetchData';
import getCookie from '../Cookies/GetCookie';

const ActualQeustion = () => {
    const role = getCookie("role");
    const question = [];
    // Set date from database\
    const [{ fetchData }, dispatch] = useStateValue();
    const [currData, setCurrData] = useState({
        data: [],
    })

    const [state, setState] = useState({
    });

    const showData = () => {
        console.log(fetchData[0]);
        console.log(currData);
    }

    const getData = async () => {
        const result = await FetchData("api/questionapi", null, "GET");
        if (result && !result.error && !result.errors) {
            const res = JSON.parse(result.geoLocation);
            //console.log(res);
            //setCurrData({
            //    data: result.question
            //})
            //clearInterval(interval);
            setData(result.question);
        }
    }

    const setData = (data) => {

        let currData = [];
        currData = data;
        if (currData?.questions !== undefined) {

            currData = currData?.questions.filter(data => {
                const created = new Date(data.createdOn.toString());
                const endDate = new Date(data.endDate.toString());

                if (data.isActual === "on" && created.getDate() < endDate.getDate()) {
                    return data;
                }
            });

            setCurrData({
                data: currData,
            })
        }
    }

    useEffect(() => {
        getData();
    }, []);

    //if (currData?.data[0] === undefined) {
    //    getData();
    //}

    // Date createdOn
    //useEffect(() => {

    //    let currData = [];
    //    if (currData?.questions !== undefined) {

    //        currData = currData?.questions.filter(data => {
    //            const created = new Date(data.createdOn.toString());
    //            const endDate = new Date(data.endDate.toString());

    //            if (data.isActual === "on" && created.getDate() < endDate.getDate()) {
    //                return data;
    //            }
    //        });

    //        setCurrData({
    //            data: currData,
    //        })
    //    }


    //}, [fetchData]);

    return <div className="Home">


        {role === "Admin" ? <button onClick={showData} >Test context api store</button> : null}

        {currData?.data[0] == undefined ?
            <div className="text-center">
                <Loader />
            </div> :

            currData?.data.map((data, index) => (
                <div key={index} className="row container">
                    {currData !== undefined ? <div className="text-center m-auto timer__counter w-100">
                        <div className="text-right">
                            Сегашно време: <Clock /> <br />
                        </div>

                        <div
                            className="text-center pt-3 pb-3">
                            <h2>Актуален въпрос <small>оставащо време: <CountDown date={data.endDate.toString()} /></small> </h2>
                            Крайна дата: {new Date(data.endDate.toString()).toDateString()}
                        </div>

                    </div> : null}

                    <CurrentQuestion
                        getData={getData}
                        title={data?.title}
                        negativeVotes={data?.negativeVotes}
                        positiveVotes={data?.positiveVotes}
                        commentsCount={data?.commentsCount}
                        votesCount={data.votesCount}
                        actual={data?.isActual}
                        id={data?.id}
                        title={data?.title ? data.title : null}
                        image={data?.imageUrl ? data.imageUrl : null}
                        userName={"go6o " + index ? index : null + 1}
                        createdOn={new Date(data?.createdOn).toUTCString() ? new Date(data?.createdOn).toUTCString() : null}
                        question={data?.description ? data?.description : null}
                    />
                </div>
            ))}

    </div>
}
export default ActualQeustion;