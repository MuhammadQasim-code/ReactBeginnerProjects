import { useState } from "react"
import Button from "../component/Button"
import { useNavigate } from "react-router-dom"
import Timer from "../component/Timer"

function QuizAppQuestions() {
    const [Index, setIndex] = useState(0)
    const navigate = useNavigate()

    let questions = [
        {

            question: "Which country hosted the COP28 climate summit?",
            options: [
                "USA",
                "UAE",
                "Russia",
                "Singapore",
            ],
            correctAnswer: "UAE",
            points: 2,


        },
        {
            question: "Who is the current Secretary-General of the United Nations?",
            options: [
                "Antonio Guterres",
                "JD Vance",
                "Albert Fernando",
                "Christine Lagarde"
            ]
            ,
            correctAnswer: "Antonio Guterres",
            points: 2,


        },
        {
            question: "Which country recently became a full member of BRICS in 2024?",
            options: [
                "Pakistan",
                "India",
                "Saudi Arabia",
                "China"

            ],
            correctAnswer: "Saudi Arabia",
            points: 2,


        },
        {
            question: "Who is the current Prime Minister of Pakistan (2026)",
            options: [
                "Ishaq Dar",
                "Bilawal Bhutto",
                "Nawaz Sharif",
                "Shahbaz Sharif",
            ],

            correctAnswer: "Shahbaz Sharif",
            points: 2,


        },
        {
            question: "Which tech company developed the AI chatbot ChatGPT?",
            options: [
                "Anthropic",
                "OpenAI",
                "Nvidia",
                "Antigravity",
            ],
            correctAnswer: "OpenAI",
            points: 2,


        },
        {
            question: "Which global conflict began in 2022 involving Russia and Ukraine?",
            options: ["Middle-East War",
                "Crimean Crisis",
                "The Russia-Ukraine War",
                "Cold War II"],
            correctAnswer: "The Russia-Ukraine War",
            points: 2,


        },
        {
            question: "Which country won the ICC Cricket World Cup 2023?",
            options: ["Australia",
                "India",
                "South Africa",
                "New Zealand "],
            correctAnswer: "Australia",
            points: 2,


        },
        {
            question: "What is the name of the global economic group consisting of the world's largest economies?",
            options: ["G7",
                "BRICS",
                "G20",
                "OECD"],
            correctAnswer: "G20",
            points: 2,


        },
        {
            question: "Which social media platform was rebranded from Twitter in 2023?",
            options: ["Snapchat",
                "Meta",
                "Threads",
                "X"],
            correctAnswer: "X",
            points: 2,


        },
        {
            question: "Which country hosted the FIFA World Cup 2022?",
            options: [
                "Iraq",
                "Qatar",
                "Saudi Arabia",
                "USA"
            ],
            correctAnswer: "Qatar",
            points: 2,


        }
    ]


    const [Score, setScore] = useState(0)
    
    
    const  nextQuestion =  ((selectedOption)=> {
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(prev => prev + 2)
        }
        
        
        
        setIndex(prev => prev + 1)
    }

    
)

if (Index >= questions.length) {
            return (
                <div className=" min-h-screen bg-linear-to-br from-slate-800 to-slate-900 text-white flex flex-col">

                    <div className="flex justify-between items-center px-6 py-4">
                        <h1 className="text-2xl text-slate-300 font-semibold">Quiz App</h1>
                    </div>

                    <div className=" flex flex-1 items-center justify-center px-4 bg-linear-to-br from-slate-700 to-slate-900">

                        <div className=" w-full max-w-xl bg-linear-to-br from-slate-800 to-slate-900 backdrop-blur-md rounded-2xl shadow-xl p-10 border-2 border-slate-700 text-center">

                            <h1 className="text-3xl md:text-4xl font-bold text-slate-200 mb-6">
                                🎉 Quiz Completed
                            </h1>

                            <h2 className="text-xl text-slate-300 mb-8">
                                Your Score :
                                <span className="text-white font-semibold"> {Score}</span>
                            </h2>

                            <div className=" flex flex-col sm:flex-row gap-4 justify-center">

                                <Button
                                    text={"Back to Home"}
                                    onClick={BacktoHome}
                                    bgcolor="bg-slate-700"
                                    textColor={"rgb(226,232,240)"}
                                />

                                <Button
                                    text={"Restart Quiz"}
                                    onClick={restartQuiz}
                                    bgcolor="bg-slate-700"
                                    textColor={"text-white"}
                                />

                            </div>

                        </div>

                    </div>

                </div>
            )
        }


        const currentQuestion = questions[Index]

    function BacktoHome() {
        navigate("/")
    }
    


    function restartQuiz() {
        setIndex(0)
        setScore(0)
    }

    return <>

        <div className="min-h-screen bg-linear-to-br from-slate-800 to-slate-900 text-white flex flex-col">

            <div className="flex justify-between items-center px-6 py-4">
                <h1 className="text-2xl text-slate-300 font-semibold">Quiz App</h1>

                <Button
                    text={"Back Home"}
                    onClick={() => navigate("/")}
                    bgcolor="bg-slate-600"
                    textColor={"text-slate-300"}
                />
            </div>

            <div className="flex flex-col items-center justify-center flex-1 px-4 bg-linear-to-br from-slate-700 to-slate-900">

                <div className="w-full max-w-2xl bg-linear-to-br from-slate-800 to-slate-900 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-slate-700">


                    <h2 className="text-xl md:text-2xl font-semibold text-slate-200 mb-6 text-center">
                        {Index + 1}. {currentQuestion.question}
                    </h2>

                    <div className="flex flex-col items-center gap-4">
                        <Timer function={nextQuestion} Index={Index} />
                        {currentQuestion.options.map((option, i) => (

                            <button
                                key={i}
                                onClick={() => nextQuestion(option)}
                                className="w-full py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 transition duration-200 text-slate-200 font-medium shadow-md hover:cursor-pointer"
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <h1 className="text-lg font-semibold text-slate-300">
                            Score : <span className="text-white">{Score}</span>
                        </h1>
                    </div>

                </div>

            </div>

        </div>



    </>
}

export default QuizAppQuestions