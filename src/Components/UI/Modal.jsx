import React, {Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div onClick={props.onClick} className="fixed top-0 left-0 w-full h-[100vh] z-20 bg-black bg-opacity-80  " />
}



const ModalOverlay = (props) => {
    return (
        <div className="fixed top-[20vh]
         left-[5%] md:left-[25%] w-[90%] bg-sky-50
         p-4 rounded-2xl z-30 animate-slide_down
         md:w-[40rem] shadow-xl shadow-slate-700 ">
            <div> {props.children} </div>
        </div>
    )
}

const PortalElement = document.getElementById('overlays');

const Modal = (props) => {
    
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onHideBackdrop} />, PortalElement)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, PortalElement)}
        </Fragment>
    )
}

export default Modal;