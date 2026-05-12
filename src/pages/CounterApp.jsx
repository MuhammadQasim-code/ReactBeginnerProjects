import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";

function CounterApp() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function counter() {
    setCount(prev => prev + 1);
  }

  function decreaseCounter() {
    if (count > 0) {
      setCount(prev => prev - 1);
    } else {
      alert("Increase");
    }
  }

  function resetCounter() {
    setCount(0);
  }

  return (



    
    <div className="bg-slate-900 min-h-screen text-white">

      <div className="flex justify-between items-center px-6 py-4 bg-slate-800 shadow-md">
        <h1 className="text-xl font-semibold">Counter App</h1>

        <Button text={"⬅ Back Home"} onClick={() => navigate("/")} textColor={"text-slate-300"} bgcolor="bg-slate-600"/>
          
        
          
        
      </div>

      <div className="flex flex-col items-center justify-center mt-20 gap-4">

        <h1 className="text-4xl font-bold">Counter : {count}</h1>

        <Button textColor="text-black" bgcolor="bg-slate-600" onClick={counter} text="Increase ➕" />

        <Button textColor="text-black" bgcolor="bg-slate-600" onClick={decreaseCounter} text="Decrease ➖" />

        <Button textColor="text-black" bgcolor="bg-slate-600" onClick={resetCounter} text="Reset 🔄" />

      </div>
    </div>
  );
}

export default CounterApp;