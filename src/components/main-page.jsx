import React from "react";

function MainPage(props) {
    return (
        <div className="mainPage">
            {props.children}
        </div>
    )
}

export default MainPage;