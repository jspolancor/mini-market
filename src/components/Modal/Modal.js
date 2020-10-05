import React, { useEffect } from 'react';
import classNames from 'classnames';

import ModalStyles from './Modal.module.scss'

const Modal = ({ onClose, open, title, children }) => {
    const modalClasses = classNames({ 
        [ModalStyles.container]: true,
        [ModalStyles.hidden]: open === false
    });

    useEffect(() => {
        // Hide body scroll when the modal is open
        document.body.style.overflowY = open ? 'hidden' : 'initial';
    }, [open])

    return (
        <div className={modalClasses}>
            <div className={ModalStyles.header} >
                <h2>{title}</h2>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            <div className={ModalStyles.content} >
                {children}
            </div>
        </div>
    )
}

export default Modal;