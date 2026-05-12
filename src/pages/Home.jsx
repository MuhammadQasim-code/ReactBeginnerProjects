import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-800 to-slate-900 text-white px-4">

      <h1 className="text-4xl font-bold text-center pt-10 mb-10">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-20 ">

        <div
          onClick={() => navigate("/counter-app")}
          className="bg-slate-700 hover:bg-slate-800 cursor-pointer 
                     rounded-2xl p-6 w-72 text-center shadow-lg 
                     transition transform hover:-translate-y-2 hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">🔢 Counter App</h2>
          <p className="text-sm text-gray-300">
            Simple React counter project
          </p>
        </div>


      <div
          onClick={() => navigate("/quiz-app")}
          className="bg-slate-700 hover:bg-slate-800 cursor-pointer 
                     rounded-2xl p-6 w-72 text-center shadow-lg 
                     transition transform hover:-translate-y-2 hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">🧠 Quiz App</h2>
          <p className="text-sm text-gray-300">
            Simple React Quiz project
          </p>
        </div>


        <div
          onClick={() => navigate("/color-switcher-app")}
          className="bg-slate-700 hover:bg-slate-800 cursor-pointer 
                     rounded-2xl p-6 w-72 text-center shadow-lg 
                     transition transform hover:-translate-y-2 hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">🔴🟠🟡  Color Switcher</h2>
          <p className="text-sm text-gray-300">
            Simple Limited Color Switcher 
          </p>
        </div>

        <div
          onClick={() => navigate("/todo-list")}
          className="bg-slate-700 hover:bg-slate-800 cursor-pointer 
                     rounded-2xl p-6 w-72 text-center shadow-lg 
                     transition transform hover:-translate-y-2 hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">📝 Todo List</h2>
          <p className="text-sm text-gray-300">
            Simple Todo List Project
          </p>
        </div>



     <div className="bg-slate-700 rounded-2xl p-6 w-72 text-center shadow-lg opacity-70">
          <h2 className="text-xl font-semibold mb-2">🚧 More Projects</h2>
          <p className="text-sm text-gray-300">Coming Soon</p>
        </div>

      </div>
    </div>
  );
}

export default Home;