const axios = require('axios');

const delay = ms => new Promise(res => setTimeout(res, ms));

class workshop_02 {
    async getAddress(cepNumber) {
        await delay(3000);
        const { cep, logradouro, complemento, bairro, localidade, uf } = await axios.get('https://viacep.com.br/ws/' + cepNumber + '/json/').then((res) => res.data);

        return {
            cep,
            logradouro,
            complemento,
            bairro,
            localidade,
            uf
        }
    }

    async addUserAddress(firstName, lastName, cepNumber) {
        try {
            const address = await this.getAddress(cepNumber);

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
}

module.exports = new workshop_02;
