import React from "react";

import { Icon } from 'antd';
import { connect } from "react-redux";
import { selectUser, addUserToDeleteList, removeUserFromDeleteList } from "../redux/actions/user-actions";


class UserList extends React.Component {

    onChange(e, user) {
        e.stopPropagation();
        if (e.target.checked) {
            this.props.addUserToDeleteList(user);
        } else {
            this.props.removeUserFromDeleteList(user);
        }
    }

    selectUser(user) {
        this.props.selectUser(user);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.users.map((user) => {

                        return (

                            <li className="userList" key={user.id} style={{ background: user.toBeDeleted ? "#dff4ff" : "white" }} >
                                <div className="userData" onClick={() => this.selectUser(user)}>
                                    <div className="iconBox">
                                        <input type="checkbox" onClick={(e) => this.onChange(e, user)} className="checkBox" />
                                        <Icon type="user" />
                                    </div>
                                    <p>{user.name}</p>
                                </div>
                            </li>
                        );

                    })}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    const { usersList, selectedUser } = state.users;
    return {
        users: usersList,
        selectedUser
    }
}

const mapDispatchToProps = {
    selectUser,
    addUserToDeleteList,
    removeUserFromDeleteList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);