import { useEffect, useState } from 'react';

const Timer = ({function : nextQuestion , Index}) => {

    const [time , setTime] = useState(30)
    const [displayTime , setDisplayTime] = useState("")


    useEffect(()=>{
        setTime(30)
    },[Index])

     useEffect(() => {

        if (time === 0) {
            nextQuestion();
            return;
        }

        const intervalThing = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalThing);

    }, [time, Index]);

    let formattedTime = `${String(Math.floor(time / 60)).padStart(2, "0")} : ${String(time % 60).padStart(2, "0")}`;

    
  return (
    <div>
      
      <h1 >{formattedTime}</h1>
    </div>
  );
};

export default Timer;