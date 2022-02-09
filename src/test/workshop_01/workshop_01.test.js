const workshop_01 = require('../../workshop_01/workshop_01');

it('should return a username with toBe', () => {
    const username = 'Yussef Casseb';
    
    const response = workshop_01.returnUsername('Yussef', 'Casseb');

    expect(response).toBe(username);
});

it('should return a username with toHaveLength', () => {
    const response = workshop_01.returnUsername('Yussef', 'Casseb');

    expect(response).toHaveLength(13);
});

it('should return true - toBeTruthy', () => {
    const response = workshop_01.validateUsername('Yussef', 'Casseb');

    expect(response).toBeTruthy();
});

it('should return false - toBeFalsy', () => {
    const response = workshop_01.validateUsername();

    expect(response).toBeFalsy();
});

it('should return user object - toStrictEqual', () => {
    const user = {
        firstName: 'Yussef',
        lastName: 'Casseb',
        username: 'Yussef Casseb'
    };

    const response = workshop_01.createUserObjectReturnNull(user.firstName, user.lastName);

    expect(response).toStrictEqual(user);
});

it('should return toBeNull', () => {
    const response = workshop_01.createUserObjectReturnNull();

    expect(response).toBeNull();
});

it('should return toBeUndefined', () => {
    const response = workshop_01.createUserObjectReturnUndefined();

    expect(response).toBeUndefined();
});

it('should return error with try/catch', () => {
    expect.assertions(1);

    try {
        workshop_01.validateUserWithError();
    } catch (error) {
        expect(error).toStrictEqual(new Error('Missing user parameters'));
    }
});

it('should return error with toThrowError', () => {
    function returnCatch() {
        workshop_01.validateUserWithError()
    }

    expect(returnCatch).toThrowError(new Error('Missing user parameters'));
    expect(returnCatch).toThrowError('Missing user parameters');
    expect(returnCatch).toThrowError('Missing');
    expect(returnCatch).toThrow();
});