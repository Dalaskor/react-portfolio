import React from 'react';
import style from './UI.module.scss';

interface ErrorMessageProps {
    error: string;
}

export const ErrorMessage = ({error}: ErrorMessageProps) => {
    return (
        <div className={style.errorMessage}>{error}</div>
    )
}