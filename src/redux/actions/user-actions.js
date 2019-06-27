export function createUser(user) {
    return {
        type: "CREATE_USER",
        user
    }
}

export function addUserToDeleteList(user) {
    return {
        type: "SET_DELETE",
        user
    }
}

export function removeUserFromDeleteList(user) {
    return {
        type: "REMOVE__DELETE",
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