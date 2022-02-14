const { validateUsername, getAddress } = require("../utils/helpers");

class workshop_02 {
    async addUserAddress(firstName = '', lastName = '', cepNumber = '') {
        const validUsername = validateUsername(firstName, lastName);

        if (validUsername) {
            try {
                const address = await getAddress(cepNumber);
    
                return {
                    firstName,
                    lastName,
                    username: firstName + " " + lastName,
                    address: {
                        ...address
                    }
                };   
            } catch (error) {
                throw new Error('Unable to get user address')
            }
        }

        return null;
    }

    async addUserAndComapanyAddress(firstName = '', lastName = '', userCep = '', companyCep = '') {
        try {
            const userAddress = await getAddress(userCep);
            const companyAddress = await getAddress(companyCep);

            return {
                firstName,
                lastName,
                username: firstName + " " + lastName,
                userAddress: {
                    ...userAddress
                },
                userAddress: {
                    ...companyAddress
                }
            };   
        } catch (error) {
            throw new Error('Unable to get user/company address')
        }
    }
}

module.exports = new workshop_02;
