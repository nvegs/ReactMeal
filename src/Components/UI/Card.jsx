//reusable card component
const Card = (props) => {
    return <div className="p-4 shadow-md shadow-black bg-sky-50 rounded-2xl ">{ props.children }</div>
}

export default Card;