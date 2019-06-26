class User {
    constructor({ name, localId, description, id }) {
        this._errors = {};
        this.name = name;
        this.localId = localId;
        this.description = description;
        this.id = id;
    }

    set name(value) {
        if (value) {
            this._name = value;
            this._errors.name = false;
        } else {
            this._errors.name = "Please Enter User Name";
        }
    }

    get name() {
        return this._name;
    }

    set localId(value) {
        const localId = parseInt(value);
        if (localId) {
            this._localId = value;
            this._errors.localId = false;
        } else {
            this._errors.localId = "Local Id must be a valid integer";
        }
    }

    get localId() {
        return this._localId;
    }

    set description(value) {
        if (value) {
            this._description = value;
            this._errors.description = false;
        } else {
            this._errors.description = "Description is required";
        }
    }

    get description() {
        return this._description;
    }

    set id(value) {
        this._id = value;
    }

    get id() {
        return this._id;
    }

    hasErrors() {
        let hasError = false;
        for (let prop in this._errors) {
            if (this._errors[prop]) {
                hasError = this._errors;
                break;
            }
        }
        return hasError;
    }

    toJSON() {
        return {
            name: this._name,
            localId: this._localId,
            description: this._description,
            id: this._id
        }
    }


}

export default User;