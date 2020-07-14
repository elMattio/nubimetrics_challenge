import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/index";
import { Modal } from "react-bootstrap";

function ModalW({isModalOpen, closeModal, itemDetail}) {
        return (     
          <div >
            <Modal show={isModalOpen} onHide={closeModal}>
              <Modal.Header closeButton>{itemDetail.id}</Modal.Header>
              <Modal.Body>
                <p>Status: {itemDetail.status}</p>
                <p>Site id: {itemDetail.site_id}</p>
                <p>Cantidad inicial: {itemDetail.initial_quantity} unidades</p>
                <p>Precio base: ${itemDetail.base_price}</p>
                <p>{itemDetail.warranty}</p>
              </Modal.Body>
              <Modal.Footer>
                <button onClick={closeModal} className="btn btn-outline-success my-2 my-sm-0">Cerrar</button>
              </Modal.Footer>
            </Modal>
          </div>  
        )
};

function mapStateToProps(state) {
    return {
        isModalOpen: state.isModalOpen,
        itemDetail: state.itemDetail
    }
};

export default connect(mapStateToProps, { closeModal } )(ModalW)
