import React from "react";
import { Icon } from "antd";

function SuccessBox(props) {
    return (
        <div>
            <div className="overlay"></div>
            <div className="successBox">
                <Icon type="check-circle" />
                <h2>Add User</h2>
                <p>User has been saved successfully!!</p>
                <button onClick={() => props.toggleSuccessBox()}>OK</button>
            </div>

        </div>
    )
}

export default SuccessBox;