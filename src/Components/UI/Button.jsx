

const Button = (props) => {
    const classes = `cursor-pointer
     rounded-3xl ml-4 py-2
     px-8 border-[#8a2b06]
      hover:bg-[#5a1a01]
     hover:border-[#5a1a01] hover:text-sky-50 bg-[#5a1a01]
     ${props.className}`;

    return (
        <button onClick={props.onClick}
            className={classes}>
            {props.children}
        </button>
     
    );

}

export default Button