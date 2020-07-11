import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/index";
import { Modal } from "react-bootstrap";

function ModalW({isModalOpen, closeModal}) {
        return (     
          <div >
            <Modal show={isModalOpen} onHide={closeModal}>
              <Modal.Header closeButton>Este es el modal</Modal.Header>
              <Modal.Body>Este es el cuerpito de mi modal</Modal.Body>
              <Modal.Footer>
                <button onClick={closeModal} className="btn btn-outline-success my-2 my-sm-0">Cerrar</button>
              </Modal.Footer>
            </Modal>
          </div>  
        )
};

function mapStateToProps(state) {
    return {
        isModalOpen: state.isModalOpen
    }
}

export default connect(mapStateToProps, { closeModal} )(ModalW)
