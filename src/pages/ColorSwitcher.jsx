import Button from "../component/Button"
import { useState ,  } from "react";
import { useNavigate } from "react-router-dom";
import ColorSwitcherButton from "../component/ColorSwitcherButton";

const ColorSwitcher = () => {
    const [currentColor , setColor] = useState(["Select Color"])
    const navigate = useNavigate()
    const colors = ["red", "blue", "gray", "orange", "purple", "skyblue", "aqua", "lightgreen", "#516572"]

    const changeColor = ((item)=>{
        setColor(item)
    })

    return <>

    <div className="min-h-screen bg-linear-to-br from-slate-800 to-slate-900 text-white">
    
    <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl text-slate-300 font-semibold">Color Switcher</h1>

        <Button 
            text={"Back Home"} 
            onClick={() => navigate("/")}  
            bgcolor="rgb(71, 85, 105)"
            textColor={"rgb(203,213,225)"}
        />
    </div>
    

    <div className="flex flex-col gap-5  bg-linear-to-br from-slate-700 to-slate-900 items-center justify-center h-[95vh]">


        <div className="flex justify-center gap-4 m-12">

            {colors.map((item) => (

                <ColorSwitcherButton onClick={(()=> changeColor(item))}  key={item} text={item} bgcolor={item} />

            ))}

        </div>

        <div style={{backgroundColor : `${currentColor}`}} className="w-200   rounded-3xl text-white font-extrabold h-400 content-center text-center ml-auto mr-auto mb-4 bg-slate-800 ">

            <h1>{currentColor}</h1>

        </div>
                </div>

                </div>
    </>
};

export default ColorSwitcher;