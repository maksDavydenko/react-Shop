import React from 'react';
import ScrollToTop from "react-scroll-up";
import { AiOutlineArrowUp } from "react-icons/ai";

function UpButton() {
    return (
        <ScrollToTop showUnder={100}>
            <div className="clickToTop">
                <AiOutlineArrowUp />
            </div>
        </ScrollToTop>
    )
}

export default UpButton;
