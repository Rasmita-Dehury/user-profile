import React from "react";
import UserInformation from "./user-information";

export default class RightPane extends React.Component {
    render() {
        return (
            <div id="rightPane">
                <UserInformation />
            </div>
        )
    }
}