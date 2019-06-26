import React from "react";
import { Icon } from "antd";
import { connect } from "react-redux";
import { createUser } from "../redux/actions/user-actions";
import User from "../models/user";
import uuid from "uuid/v4";


class AddUser extends React.Component {

    state = {
        errors: {}
    }

    nameTxt = React.createRef();
    localIdTxt = React.createRef();
    descriptionTxt = React.createRef();

    toggleAddUser() {
        this.props.toggleAddUser();
    }

    addUser = (e) => {
        e.preventDefault();
        const name = this.nameTxt.current.value;
        const localId = this.localIdTxt.current.value;
        const description = this.descriptionTxt.current.value;

        const user = new User({ name, localId, description, id: uuid() });
        const errors = user.hasErrors();
        this.setState({ errors }, () => {
            if (!errors) {
                this.props.createUser(user.toJSON());
                this.toggleAddUser();
                this.props.toggleSuccessBox();
            }
        });
    }

    render() {

        return (
            <div>
                <form onSubmit={this.addUser}>
                    <div className="overlay" onClick={() => this.toggleAddUser()} ></div>
                    <div className="addUser">
                        <div className="header">
                            <h2>Add User</h2>
                            <Icon type="close" onClick={() => this.toggleAddUser()} />
                        </div>
                        <div className="addDetails">
                            <div>
                                <label>Name</label>
                                <input type="text" ref={this.nameTxt} />
                                <span className="err">{this.state.errors.name}</span>
                            </div>
                            <div>
                                <label>Local-Id</label>
                                <input type="text" ref={this.localIdTxt} />
                                <span className="err">{this.state.errors.localId}</span>
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea cols="2" rows="2" ref={this.descriptionTxt}></textarea>
                                <span className="err">{this.state.errors.description}</span>
                            </div>
                        </div>
                        <div className="btnBox">
                            <button style={{ background: "#78909c" }} type="button" onClick={() => this.toggleAddUser()}>Close</button>
                            <input type="submit" value="Save" />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

function mapStateToProps(state, ownProps) {
    return {

    }
}

const mapDispatchToProps = {
    createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);