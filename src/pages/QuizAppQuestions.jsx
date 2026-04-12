import { useState } from "react"
import Button from "../component/Button"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

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


    const currentQuestion = questions[Index]
    const [Score, setScore] = useState(0)


    function nextQuestion(selectedOption) {
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(Score + currentQuestion.points)
        }
        setIndex(Index + 1)
    }



    if (Index === questions.length) {
        return <>
            <h1>Quiz Completed</h1>
            <h1>Your Score : {Score}</h1>
            <Button text={"Back to Home"} onClick={BacktoHome} />
            <Button text={"Restart Quiz"} onClick={restartQuiz} />
        </>



    }

    function BacktoHome() {
        navigate("/")
    }



    function restartQuiz() {
        setIndex(0)
        setScore(0)
    }

    return <>

        <div>
            <h2>{Index + 1}. {currentQuestion.question}</h2>

            {currentQuestion.options.map((option, i) => (
                <Button
                    key={i}
                    onClick={() => nextQuestion(option)}
                    text={`${option}`}
                />
            ))}

            <h1>Score : {Score}</h1>
        </div>



    </>
}

export default QuizAppQuestions