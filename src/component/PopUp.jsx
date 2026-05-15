import Button from "./Button";
const PopUp = ({confirmDelete , cancelDelete , text ,closeButton}) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-700 to-slate-900">
        <div className="min-h-screen w-[80vw] gap-5 flex flex-col justify-center items-center m-auto">
            <div className="h-[50vh] w-[40vw] text-amber-50 gap-5 shadow-md shadow-slate-900 flex flex-col justify-center items-center m-auto">
            <div className="absolute top-2 right-5">
            <button onClick={closeButton} className="border-2 border-slate-700 rounded-sm px-1.5 py-1 cursor-pointer">✖</button>

            </div>
            <h2>Do you want to {text} the Task?</h2>
            <div>
                <Button onClick={confirmDelete} text={"Yes"} bgcolor={"bg-green-400"} textColor={"text-black"}/>
                <Button onClick={cancelDelete} text={"No"} bgcolor={"bg-red-400"} textColor={"text-black"}/>
            </div>
            </div>
        </div>
    </div>
  );
};

export default PopUp;