import Button from "../component/Button"
import { useNavigate } from "react-router-dom"

function QuizApp(){

    const navigate = useNavigate()

    function questionsPage(){
        navigate("/quiz-app-questions")
    }


return <>
    
   <div className="min-h-screen bg-linear-to-br from-slate-800 to-slate-900 text-white">
    
    <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl text-slate-300 font-semibold">Quiz App</h1>

        <Button 
            text={"Back Home"} 
            onClick={() => navigate("/")}  
            bgcolor="rgb(71, 85, 105)"
            textColor={"rgb(203,213,225)"}
        />
    </div>

    <div className="flex flex-col gap-5  bg-linear-to-br from-slate-700 to-slate-900 items-center justify-center h-[85vh]">
        <h1 className="text-4xl text-slate-300 font-bold mb-6">Quiz Time</h1>

        <Button 
            bgcolor={"rgb(71,85,105)"} 
            textColor={"rgb(203,213,225)"} 
            text={"Start Quiz"} 
            onClick={questionsPage}
        />
    </div>

</div>
</>
}

export default QuizApp