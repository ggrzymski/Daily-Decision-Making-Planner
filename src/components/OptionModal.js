import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption} 
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        onRequestClose={props.clearSelectedContent}>
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="modal__body" onClick={props.clearSelectedContent}>Okay</button>
    </Modal>
);

export default OptionModal;