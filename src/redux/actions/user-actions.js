export function createUser(user) {
    return {
        type: "CREATE_USER",
        user
    }
}

export function addUserToDeleteList(user) {
    return {
        type: "ADD_TO_DELETE_LIST",
        user
    }
}

export function removeUserFromDeleteList(user) {
    return {
        type: "REMOVE_FROM_DELETE_LIST",
        user
    }
}

export function selectUser(user) {
    return {
        type: "SELECT_USER",
        user: user
    }
}

export function deleteUsers() {
    return {
        type: "DELETE_USERS"
    }
}