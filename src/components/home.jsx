import React from "react";
import HeaderBar from './header-bar';
import MainPage from './main-page';
import LeftPane from './left-pane';
import RightPane from './right-pane';
import AddUser from './add-user';
import SuccessBox from "./success-box";
export default class Home extends React.Component {
    state = {
        addUserFormVisible: false,
        successBoxVisible: false
    }

    toggleAddUser = () => {
        this.setState({ addUserFormVisible: !this.state.addUserFormVisible });
    }

    toggleSuccessBox = () => {
        this.setState({ successBoxVisible: !this.state.successBoxVisible });
    }

    render() {
        return (
            <div>
                <HeaderBar toggleAddUser={this.toggleAddUser} />
                <MainPage>
                    <LeftPane />
                    <RightPane />
                </MainPage>
                {this.state.addUserFormVisible ? <AddUser toggleAddUser={this.toggleAddUser} toggleSuccessBox={this.toggleSuccessBox} /> : null}
                {this.state.successBoxVisible ? <SuccessBox toggleSuccessBox={this.toggleSuccessBox} /> : null}
            </div>

        );
    }
}