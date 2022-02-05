class workshop_01 {
    returnUsername(firstName = '', lastName = '') {
        return firstName + " " + lastName;
    }

    validateUsername(firstName = '', lastName = '') {
        if (firstName.length > 0 && lastName.length > 0) {
            return true;
        }

        return false;
    }

    createUserObjectReturnNull(firstName = '', lastName = '') {
        if (firstName.length > 0 && lastName.length > 0) {
            return {
                firstName,
                lastName,
                username: firstName + " " + lastName
            };
        }

        return null;
    }

    createUserObjectReturnUndefined(firstName = '', lastName = '') {
        if (firstName.length > 0 && lastName.length > 0) {
            return {
                firstName,
                lastName,
                username: firstName + " " + lastName
            };
        }
    }

    validateUserWithError(firstName = '', lastName = '') {
        if (firstName.length == 0 && lastName.length == 0) {
            throw new Error('Missing user parameters');
        }
    }
}

module.exports = new workshop_01;
