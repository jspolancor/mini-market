import React from 'react';
import classNames from 'classnames';

import ModalStyles from './Modal.module.scss'

const Modal = ({ onClose, open, title, children }) => {
    classNames({ 
        [ModalStyles.container]: true,
        [ModalStyles.hidden]: !open,
    });

    return (
        <div className={ModalStyles.container}>
            <div className={ModalStyles.header} >
                <h2>{title}</h2>
                <button className="close-button" onClick={onClose}>
                    X
                </button>
            </div>
            <div className={ModalStyles.content} >
                {children}
            </div>
        </div>
    )
}

export default Modal;