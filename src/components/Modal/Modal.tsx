import React from 'react';
import style from './Modal.module.scss';

interface ModalProps {
    title: string,
    children: React.ReactNode,
    onClose: () => void,
}

export const Modal = ({title, children, onClose}: ModalProps) => {
    return (
        <>
            <div
                className={style.modal__bg}
                onClick={onClose}
            />
            <div className={style.modal__body}>
                <h2 className={style.modal__title}>{title}</h2>
                {children}
            </div>
        </>
    )
}