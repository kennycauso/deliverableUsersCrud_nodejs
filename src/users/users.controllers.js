
const usersDB = [
    {
        id: '0c7358e1-52d1-4bc8-ac42-336849755351',
        first_name: 'kenny',
        last_name: 'causo',
        email: 'kenny@mail.com',
        password: 'kenny123',
        birthday: '2022/01/23'
    },
    {
        id: '0c7358e1-52d1-4bc8-ac42-336849755352',
        first_name: 'alex',
        last_name: 'fernandez',
        email: 'alex@mail.com',
        password: 'alex123',
        birthday: '2022/02/24'
    },
    {
        id: '0c7358e1-52d1-4bc8-ac42-336849755353',
        first_name: 'evelyn',
        last_name: 'pantoja',
        email: 'evelyn@mail.com',
        password: 'evelyn123',
        birthday: '2022/03/25'
    }
]

const uuid = require('uuid');

const getAllUsers = () => {
    return usersDB;
}

const getUsersById = (id) => {
    const data = usersDB.find(user => user.id === id);
    return data;
}

const createUsers = (first_name, last_name, email, password, birthday) => {
    const newUser = {
            id: uuid.v4(),
            first_name,
            last_name,
            email,
            password,
            birthday
    }
    usersDB.push(newUser);
    return newUser;
}

module.exports = {getAllUsers, getUsersById, createUsers};