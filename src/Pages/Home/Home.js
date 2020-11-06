import React from 'react';
import Question from '../../components/Question/Question';
import CurrentQuestion from '../../components/Question/CurrentQuestion';
import { useState } from 'react';
import { useEffect } from 'react';
import './Home.css';
import CountDown from '../../components/CountDown/CountDown';

const Home = () => {
    const question = [];
    // Set date from database\
    const endDate = "2020, 11, 10";
    let dates = new Date(endDate);

    const [state, setState] = useState({
        time: null,
    });

    const checkTime = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    //useEffect(() => {
    //    setInterval(() => {
    //        startTime()
    //    }, 500);
    //}, []);

    const startTime = () => {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);

        // setting here the expariation date.
        if (dates.getDate() <= today.getDate()) {
            // Check if it's in the alowed timestamp
            // Allow to vote

        }
        setState({
            time: h + ":" + m + ":" + s,
        });
    }
    // Date createdOn
    let dateBack = new Date("2020/11/5");

    return <div className="Home">

        <h2 className="text-center pt-3 pb-3">Aktualen vupros</h2>

        {/*<div className="text-center timer__counter">
            Sega6no vreme: {state?.time} <br />
            Ostava6to vreme: <CountDown date={endDate} /> <br />
            Kraina data: {endDate}
        </div>*/}

        {Array(1)
            .fill()
            .map((_, index) => (
                <div key={index} className="row container">

                    <CurrentQuestion
                        image="https://cdn.pixabay.com/photo/2020/10/01/17/11/temple-5619197_960_720.jpg"
                        userName={"go6o " + index + 1}
                        createdOn={dateBack.toDateString()}
                        question={"Q & A"}
                    />
                </div>
            ))}

    </div>
}

export default Home;