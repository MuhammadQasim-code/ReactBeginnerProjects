
const ColorSwitcherButton = ({ bgcolor, textColor, onClick, text }) => {
  return (
    <div>
      <button className="
                px-4 py-2 m-2 rounded-xl 
                shadow-md
                transition-all duration-300 ease-in-out
                hover:scale-110
                hover:shadow-xl
                hover:-translate-y-1
                active:scale-95  
                cursor-pointer
                "
                style={{backgroundColor : bgcolor , color: textColor} }
                 onClick={onClick}
                >
                        {text + " Btn"}

                </button>
   
   
    </div>
  );
};

export default (ColorSwitcherButton);