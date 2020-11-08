import React, { useState } from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import Clock from '../CountDown/Clock';
import CountDown from '../CountDown/CountDown';
import CurrentQuestion from '../Question/CurrentQuestion';

const ActualQeustion = () => {

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

    // Date createdOn
    useEffect(() => {

        let currData = [];
        if (fetchData[0]?.questions !== undefined) {

            currData = fetchData[0]?.questions.filter(data => {
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


    }, [fetchData]);
    
    return <div className="Home">

        <h2 className="text-center pt-3 pb-3">Aktualen vupros</h2>
        <button onClick={showData} >Test context api store</button>

        {fetchData[0] === undefined ? <Loader /> :

            currData?.data.map((data, index) => (
                <div key={index} className="row container">

                    {fetchData[0] !== undefined ? <div className="text-center m-auto timer__counter">
                        Sega6no vreme: <Clock /> <br />
                        Ostava6to vreme: <CountDown date={data.endDate.toString()} /> <br />
                        Kraina data: {new Date(data.endDate.toString()).toDateString()}
                    </div> : null}

                    <CurrentQuestion
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