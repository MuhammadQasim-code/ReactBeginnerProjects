function Button({ bgcolor, textColor = "black", onClick, text }) {

        return <>

                <button className="
        px-5 py-2 m-2 rounded-xl font-medium
        shadow-md
        transition-all duration-300 ease-in-out

        hover:scale-110
        hover:shadow-xl
        hover:-translate-y-1

        active:scale-95
      "
                        style={{ backgroundColor: bgcolor, color: textColor }} onClick={onClick}
                >
                        {text}
                </button>

        </>
}

export default Button