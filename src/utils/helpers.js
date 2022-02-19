const axios = require('axios');

class helpers {
    validateUsername(firstName = '', lastName = '') {
        if (firstName.length > 0 && lastName.length > 0) {
            return true;
        }
    
        return false;
    }
    
    async getAddress(cepNumber = '') {
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
}

module.exports = new helpers;
