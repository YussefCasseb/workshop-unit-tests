jest.mock('../../utils/helpers');
const { validateUsername, getAddress } = require('../../utils/helpers');

const workshop_02 = require('../../workshop_02/workshop_02');

let user, address;

beforeEach(() => {
    jest.resetAllMocks();

    address = {
        cep: '93290-340',
        logradouro: 'Avenida João Paulo I',
        complemento: '',
        bairro: 'Santo Inácio',
        localidade: 'Esteio',
        uf: 'RS',
    }

    user = {
        firstName: 'Yussef',
        lastName: 'Casseb',
        username: 'Yussef Casseb',
        address
    };
});

describe('success tests', () => {
    it('should return user address', async () => {
        user.firstName = 'Teste';
        user.username = 'Teste Casseb';

        validateUsername.mockReturnValue(true);
        getAddress.mockResolvedValue(address);

        const response = await workshop_02.addUserAddress('Teste', 'Casseb', '93290340');

        expect(response).toStrictEqual(user);

        expect(validateUsername).toHaveBeenCalledTimes(1);
        expect(getAddress).toHaveBeenCalledTimes(1);
        expect(validateUsername).toHaveBeenCalledWith('Teste', 'Casseb');
        expect(getAddress).toHaveBeenCalledWith('93290340');
        expect(validateUsername).toHaveReturned();
        expect(getAddress).toHaveReturned();
        expect(validateUsername).toHaveReturnedWith(true);
    });

    it('should return user and company address', async () => {
        const userAddress = {
            ...address
        }

        address.uf = 'SP';

        const userCompany = {
            firstName: user.firstName,
            lastName: 'Casseb',
            username: user.username,
            userAddress,
            companyAddress: {
                ...address
            }
        };
    
        getAddress.mockResolvedValueOnce(userAddress).mockResolvedValueOnce(address);
    
        const response = await workshop_02.addUserAndComapanyAddress('Yussef', 'Casseb', '93290340', '93290340');
    
        expect(response).toStrictEqual(userCompany);
    
        expect(getAddress).toHaveBeenCalledTimes(2);
        expect(getAddress).toHaveBeenCalledWith('93290340');
        expect(getAddress).toHaveReturned();
    });
});

describe('error tests', () => {
    it('should return a error', async () => {
        validateUsername.mockReturnValue(true);
        getAddress.mockRejectedValue('Error');
    
        expect.assertions(8);
        
        try {
            await workshop_02.addUserAddress('Yussef', 'Casseb', '93290340');
        } catch (error) {
            expect(error).toStrictEqual(new Error('Unable to get user address'));
        }
    
        expect(validateUsername).toHaveBeenCalledTimes(1);
        expect(getAddress).toHaveBeenCalledTimes(1);
        expect(validateUsername).toHaveBeenCalledWith('Yussef', 'Casseb');
        expect(getAddress).toHaveBeenCalledWith('93290340');
        expect(validateUsername).toHaveReturned();
        expect(getAddress).toHaveReturned();
        expect(validateUsername).toHaveReturnedWith(true);
    });
    
    it('should return user and company address', async () => {   
        getAddress.mockResolvedValueOnce(address).mockRejectedValueOnce('Error');
    
        expect.assertions(4);
    
        try {
            await workshop_02.addUserAndComapanyAddress('Yussef', 'Casseb', '93290340', '93290340');
        } catch (error) {
            expect(error).toStrictEqual(new Error('Unable to get user/company address'));   
        }
    
        expect(getAddress).toHaveBeenCalledTimes(2);
        expect(getAddress).toHaveBeenCalledWith('93290340');
        expect(getAddress).toHaveReturned();
    }); 
});