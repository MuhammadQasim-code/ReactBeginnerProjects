import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import { useState, useEffect } from "react";
import PopUp from "../component/PopUp";

const TodoList = () => {
  const [arr, updatedArr] = useState(() => {
    const savedTasks = localStorage.getItem("todos");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const navigate = useNavigate();

  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editKeyIndex, setEditKeyIndex] = useState(null);
  const [actualIndex, seteditIndex] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [value, setValue] = useState("");
  const [popUpText, setPopUpText] = useState("delete");


  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  const submitButton = () => {
    if (actualIndex !== null) {
      const edittedArray = arr.map((item, index) => {
        if (index === actualIndex) {
          return value;
        }
        return item;
      });

      updatedArr(edittedArray);
      setValue("");
      seteditIndex(null);
      setEditKeyIndex(null);
      setPopUpText("delete");
    } else {
      updatedArr([...arr, value]);
      setValue("");
    }
  };

  const deleteAllButton = () => {
    updatedArr([]);
  };

  const confirmDelete = () => {
    const newArr = arr.filter((item, index) => index !== deleteIndex);
    updatedArr(newArr);
    setPopUp(false);
    setDeleteIndex(null);
    setPopUpText("delete");
  };

  const cancelDelete = () => {
    setPopUp(false);
    setDeleteIndex(null);
    setPopUpText("delete");
  };

  const deleteTasks = (key) => {
    setPopUp(true);
    setDeleteIndex(key);
    setPopUpText("delete");
  };

  const editConfirm = () => {
    setValue(arr[editKeyIndex]);
    seteditIndex(editKeyIndex);
    setPopUp(false);
    setPopUpText("delete");
    setEditKeyIndex(null);
  };

  const editTask = (key) => {
    setPopUpText("edit");
    setPopUp(true);
    setEditKeyIndex(key);
  };

  const cancelEdit = () => {
    setPopUp(false);
    setEditKeyIndex(null);
    setPopUpText("delete");
  };

  const closeButton = (()=>{
    setPopUp(false)
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(arr));
  }, [arr]);

  return (
    <>
      {popUp && (
        <PopUp
          text={popUpText === "delete" ? "delete" : "edit"}
          confirmDelete={popUpText === "delete" ? confirmDelete : editConfirm}
          cancelDelete={popUpText === "delete" ? cancelDelete : cancelEdit}
          closeButton={closeButton}
        />
      )}

      <div className="min-h-screen bg-linear-to-br from-slate-800 to-slate-900 text-white">

        <div className="flex flex-col sm:flex-row bg-linear-to-br from-slate-800 to-slate-900 justify-between items-center gap-4 px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl text-slate-300  font-semibold text-center sm:text-left">
            Todo List Project
          </h1>

          <Button
            text={"Back Home"}
            onClick={() => navigate("/")}
            bgcolor="bg-slate-700"
            textColor={"text-white"}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 m-auto w-[95%] md:w-[80%] lg:w-1/2 mt-6">

          <input
            className="w-full md:flex-1 text-white focus:ring-2 outline-none border-2 border-black pt-3 pb-3 px-4 rounded-2xl"
            type="text"
            onChange={handleInputValue}
            value={value}
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

        <div className="flex flex-col items-center mt-10 w-[95%] md:w-[85%] lg:w-[80vw] m-auto">

          {arr.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center gap-5 w-full md:w-[90%] lg:w-2/3 p-4 my-4 rounded-2xl shadow-lg shadow-slate-600/50"
            >

              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white wrap-break-words text-center md:text-left">
                {item}
              </span>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

                <Button
                  textColor={"black"}
                  bgcolor={"bg-slate-900"}
                  text={"Delete"}
                  onClick={() => deleteTasks(index)}
                />

                <Button
                  textColor={"black"}
                  bgcolor={"bg-slate-900"}
                  text={"Edit"}
                  onClick={() => editTask(index)}
                />

              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default TodoList;