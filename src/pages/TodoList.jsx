import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import { useState , useEffect } from "react";

const TodoList = () => {

    const [arr, updatedArr] = useState(() => {
    const savedTasks = localStorage.getItem("todos")

    if(savedTasks){
        return JSON.parse(savedTasks)
    }

    return []
})


    const [value , setValue] = useState("")
    const [actualIndex , seteditIndex] = useState(null) 
    const navigate = useNavigate()

    const handleInputValue = ((e)=>{
        setValue( e.target.value);
    })

    const submitButton = (()=>{

        if(actualIndex !== null){
            const edittedArray = arr.map((item , index)=>{
                if(index === actualIndex){
                    return value
                }
                return item
            })
            updatedArr(edittedArray)
            setValue("")
            seteditIndex(null)
        }else{

            updatedArr([...arr , value])
            setValue("")
        }


    })

    
    const deleteAllButton = (()=>{
        updatedArr([])
    })


    const deleteTasks = ((key)=>{
        const newArr = arr.filter((item , index)=>{
            return index !== key
        })
        updatedArr(newArr)
    })


    const editTask = ((key)=>{
        setValue(arr[key])
        seteditIndex(key)
    })  


    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(arr))
}, [arr])


    return (
        <div className="min-h-screen bg-linear-to-br from-slate-800 to-slate-900 text-white">
            <div className="flex justify-between items-center px-6 py-4">
                <h1 className="text-2xl text-slate-300 font-semibold">Todo List Project</h1>

                <Button
                    text={"Back Home"}
                    onClick={() => navigate("/")}
                    bgcolor="bg-slate-700"
                    textColor={"text-white"}
                />

            </div>



            <div className="min-h-screen bg-linear-to-br from-slate-700 to-slate-900 ">

                <div className="flex justify-center items-center  m-auto w-1/2 ">

                    <input className="text-white focus:ring-2 outline-none border-2 m-4 pt-2  pb-2 pl-6 pr-6  rounded-2xl border-black" 
                    type="text" 
                    onChange={handleInputValue}
                    value = {value}
                    placeholder="Enter Your Task"
                    />

                    <Button 
                    textColor={"text-white"} 
                    bgcolor={"bg-slate-500"} 
                    text={actualIndex === null ? "Submit" : "Update"} 
                    onClick={submitButton}
                    />

                     <Button 
                    textColor={"black"} 
                    bgcolor={"bg-red-900"} 
                    text={"Delete All"} 
                    onClick={deleteAllButton}
                    />

                </div>


            <div className="flex flex-col h-auto items-center mt-10 w-[80vw] m-auto justify-between ">

                    {arr.map((item , index) => {
                        return <>
                        
                <div className="flex shadow-lg shadow-slate-600/50 justify-between w-2/3 p-4 m-4 rounded-2xl gap-20 items-center">
                    <span className="text-2xl font-bold text-white">{item}</span>
                    <div>
                        <Button 
                        textColor={"black"} 
                        bgcolor={"bg-slate-900"} 
                        text={"Delete"}
                        onClick={()=>deleteTasks(index)}
                        />


                        <Button 
                        textColor={"black"}
                        bgcolor={"bg-slate-900"} 
                        text={"Edit"}
                        onClick={()=>editTask(index)}
                        />

                    </div>
                </div>
                        </>
                    })}


                
                    
                </div>
            </div>

        </div>
    );
};

export default TodoList;