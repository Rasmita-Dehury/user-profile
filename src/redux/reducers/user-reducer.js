import produce from "immer";

export default function userReducer(state = {

    usersList: [
        { name: "Riyaz", localId: 101, description: "Frontend Developer", id: "1" },
        { name: "Abinash", localId: 102, description: "Backend Developer", id: "2" },
        { name: "Khusi", localId: 105, description: "Database Developer", id: "3" }],
    selectedUser: null,
    deleteUserList: []

}, action) {
    switch (action.type) {
        case "CREATE_USER": {
            const nextState = produce(state, (draftState) => {
                draftState.usersList.push(action.user);
            });
            return nextState;
        }
        case "DELETE_USERS": {
            let matched = false;
            const newUserList = [];
            for (let i = 0; i < state.usersList.length; i++) {
                matched = false;
                for (let z = 0; z < state.deleteUserList.length; z++) {
                    if (state.usersList[i].id === state.deleteUserList[z].id) {
                        matched = true;
                        break
                    }
                }
                if (!matched)
                    newUserList.push(Object.assign({}, state.usersList[i]));
            }

            const nextState = produce(state, (draftState) => {
                draftState.usersList = newUserList;
                draftState.selectedUser = null;
            });

            return nextState;

        }
        case "SELECT_USER": {
            const nextState = produce(state, (draftState) => {
                draftState.selectedUser = action.user;
            });
            return nextState;
        }
        case "ADD_TO_DELETE_LIST": {
            const nextState = produce(state, (draftState) => {
                draftState.deleteUserList.push(action.user);
            });
            return nextState;
        }
        case "REMOVE_FROM_DELETE_LIST": {
            const newDeleteUserList = state.deleteUserList.filter((user) => {
                if (user.id === action.user.id) {
                    return false;
                } else {
                    return true;
                }
            });
            const nextState = produce(state, (draftState) => {
                draftState.deleteUserList = newDeleteUserList;
            });

            return nextState;
        }
        default:
            return state;

    }
}