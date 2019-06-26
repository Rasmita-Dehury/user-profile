import React from "react";
import { Button } from "antd";

export default class HeaderBar extends React.Component {

    toggleAddUser() {
        this.props.toggleAddUser();
    }

    render() {
        return (
            <div id="headerBar">
                <h2>Users' Information</h2>
                <Button type="primary" onClick={() => this.toggleAddUser()}>Add User</Button>
            </div>
        )
    }
}