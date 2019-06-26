import React from "react";
import { Avatar } from 'antd';
import { connect } from "react-redux";


function UserInformation(props) {

    return (

        <div>
            {props.selectedUser ?
                <div className="userInfo">
                    <Avatar size={64} icon="user" />
                    <div>
                        <ul>
                            <li>
                                <span>Name:</span>
                                <span>{props.selectedUser.name}</span>
                            </li>
                            <li>
                                <span>Local-Id:</span>
                                <span>{props.selectedUser.localId}</span>
                            </li>
                            <li>
                                <span>Description:</span>
                                <span>{props.selectedUser.description}</span>
                            </li>
                        </ul>
                    </div>
                </div> : null}
        </div>


    )
}


function mapStateToProps(state, ownProps) {

    return {
        selectedUser: state.users.selectedUser
    }
}


export default connect(mapStateToProps)(UserInformation);

