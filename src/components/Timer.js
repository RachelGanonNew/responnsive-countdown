import React, { useEffect, useState } from 'react';
import '../styles/timer.css';

export default function Timer({index, min, sec}) {
    const [seconds, setSeconds] = useState(sec)
    const [minutes, setMinutes] = useState(min)
    function updateTime() {
        if (minutes == 0 && seconds == 0) {
            //reset
            setSeconds(sec);
            setMinutes(min);
            showAlert();
        }
        else {
            if (seconds == 0) {
                setMinutes(minutes => minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds => seconds - 1);
            }
        }
        setLocalStorage();
    }
    const showAlert = () => {
        alert("You missed the last rocket to mars!");
    }
    const reset = () => {
        setMinutes(min);
        setSeconds(sec);
    }
    const setLocalStorage = () => {
        localStorage.setItem(`timer${index}.min`, minutes);
        localStorage.setItem(`timer${index}.sec`, seconds);
    }
    const setInitLocalStorage = () => {
        localStorage.setItem(`timer${index}.min`, min);
        localStorage.setItem(`timer${index}.sec`, sec);
    }
    useEffect(() => {
        if (localStorage.getItem(`timer${index}.min`) === null) {           
            setInitLocalStorage();
        }
        else {
            setMinutes(JSON.parse(localStorage.getItem(`timer${index}.min`)));
            setSeconds(JSON.parse(localStorage.getItem(`timer${index}.sec`)));
        }
    }, [])
    useEffect(() => {

        // use set timeout and be confident because updateTime will cause rerender
        // rerender mean re call this effect => then it will be similar to how setinterval works
        // but with easy to understand logic
        const token = setTimeout(updateTime, 1000)
        return function cleanUp() {
            clearTimeout(token);
        }
    })

    return (
        <>
   
            <div className="timerWapper">
                <p className="timerMin"> {minutes} </p>
                <p className="timerTxt">:</p>
                <p className="timerSec"> {seconds} </p>
                <button className="reset" onClick={reset}>RESET</button>
            </div>
  
        </>
    );
}