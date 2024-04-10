export default class Validator {
    constructor(userName) {
        this.userName = userName;
    }

    validateUserName() {
        if (!/^[a-zA-Z]+[0-9a-zA-Z_-]*[a-zA-Z]+$/.test(this.userName)) {
            return false;
        }
        return !/\d{4,}/.test(this.userName);
    }
}