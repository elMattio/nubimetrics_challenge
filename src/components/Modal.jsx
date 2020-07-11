import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { closeModal } from "../actions/index";

function Modal({isModalOpen, closeModal}) {
    if(isModalOpen) {
        return (
             ReactDOM.createPortal(
                
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                      <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      <button onClick={closeModal} type="button" className="btn btn-outline-success my-2 my-sm-0" data-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
                
              ,
           document.getElementById("modal")
            )
        )
    } else {
        return null
    }
};

function mapStateToProps(state) {
    return {
        isModalOpen: state.isModalOpen
    }
}

export default connect(mapStateToProps, { closeModal} )(Modal)
