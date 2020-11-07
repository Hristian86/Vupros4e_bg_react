import React from 'react';

const Clock = () => {

    setInterval(() => {
        startTime()
    }, 500);

    const startTime = () => {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);

        // setting here the expariation date.
        let demoData = document.getElementById("clock");
        if (demoData !== undefined && demoData !== null && demoData.innerHTML !== null) {
            demoData.innerHTML = h + ":" + m + ":" + s;
        }
    }

    const checkTime = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    return <text className="text-primary" id="clock"></text>
}
export default Clock;