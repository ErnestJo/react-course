function Modal(prop){

    function cancelHandler(){
    prop.onCancel();
    }

    function confirmHandler(){
    prop.onConfirm();
    }
    return(
        <div className="modal">
            <p>Are you Sure you want to delete</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Comfirm</button>
        </div>
    ) 

}

export default Modal;