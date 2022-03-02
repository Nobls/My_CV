import React from 'react';
import styleScrollBtn from './ScrollBtn.module.css'

const ScrollBtn = () => {
    const handleScrollBtn = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    }
    return (
        <div className={styleScrollBtn.scrollBtn} onClick={handleScrollBtn}>
            <span>

            </span>
        </div>
    );
};

export default ScrollBtn;