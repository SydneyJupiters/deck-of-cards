function Button(props) {
        return (
            <button 
                type="button" 
                onClick={props.onClick} 
                className={`mx-2 my-2 border-blue-700 border transition duration-150 ease-in-out rounded px-6 py-2 ${props.extraClasses}`}
            >
                {props.name}
            </button>
        ) 
  }


export default Button;