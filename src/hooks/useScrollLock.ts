import React from 'react';

export const useScrollLock = () => {
    const lockScroll = React.useCallback(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    const unLockScroll = React.useCallback(() => {
        document.body.style.overflow = '';
    }, []);

    return {
        lockScroll,
        unLockScroll
    }
}