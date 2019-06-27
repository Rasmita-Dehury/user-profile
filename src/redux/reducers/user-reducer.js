import produce from "immer";

const defaultState = {
    usersList: [
        { name: "Riyaz", localId: 101, description: "Frontend Developer", id: "1" },
        { name: "Abinash", localId: 102, description: "Backend Developer", id: "2" },
        { name: "Khusi", localId: 105, description: "Database Developer", id: "3" }
    ],
    selectedUser: null

}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case "CREATE_USER": {
            const nextState = produce(state, (draftState) => {
                draftState.usersList.push(action.user);
            });
            return nextState;
        }
        case "DELETE_USERS": {
            const nextState = produce(state, (draftState) => {
                const newUserList = draftState.usersList.filter((user) => {
                    if (user.toBeDeleted)
                        return false;
                    else
                        return true;
                });
                draftState.usersList = newUserList;
            });

            return nextState;

        }
        case "SELECT_USER": {
            const nextState = produce(state, (draftState) => {
                draftState.selectedUser = action.user;
            });
            return nextState;
        }
        case "SET_DELETE": {
            const nextState = produce(state, (draftState) => {
                draftState.usersList.forEach((user) => {
                    if (user.id === action.user.id)
                        user.toBeDeleted = true;
                });
            });
            return nextState;
        }
        case "REMOVE__DELETE": {
            const nextState = produce(state, (draftState) => {
                draftState.usersList.forEach((user) => {
                    if (user.id === action.user.id)
                        user.toBeDeleted = false;
                });
            });
            return nextState;


        }
        default:
            return state;

    }
}