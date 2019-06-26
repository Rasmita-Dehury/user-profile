import React from "react";
import { Icon } from "antd";
import UserList from "./user-list";
import { deleteUsers } from "../redux/actions/user-actions";
import { connect } from "react-redux";

class LeftPane extends React.Component {
    handleDelete = () => {
        if (this.props.deleteUserList.length === 0) {
            alert("please select user to delete");
        } else {
            this.props.deleteUsers();
        }
    }
    render() {
        return (
            <div id="leftPane">
                <div className="header">
                    <h2>People</h2>
                    <Icon type="delete" onClick={this.handleDelete} />
                </div>
                <div>
                    <UserList />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        deleteUserList: state.users.deleteUserList
    }
}

const mapDispatchToProps = {
    deleteUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);