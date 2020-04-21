const axios = require("axios");

export const app = (x, y) => x + y;

export const total = (shipping, subTotal) => {
    return '$' + app(shipping, subTotal)
}

export const functions = {
    isNull: () => undefined,
    checkValue: (x) => x,
    createUser: () => {
        const user = { first: 'Life' };
        user['last'] = 'Eric'

        return user;
    },
    fetchUser: () => axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then( res => res.data)
        .catch(err => 'err')

}