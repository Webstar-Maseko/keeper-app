import react from "react"


function Error(props){
    return (
        <p className="bg-danger pl-4"> +{props.message} </p>
    )
}

export default Error;