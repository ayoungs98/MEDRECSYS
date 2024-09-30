import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Login } from './login.model';
import { loginQueries } from './login.queries';

export const readLogin= async () => {
    return execute<Login[]>(loginQueries.readLogin, []);
};

export const readLoginById = async (search: number) => {
    console.log('search param', search);
    return execute<Login[]>(loginQueries.readLoginById, [search]);
};

export const readLoginByName = async (search: string) => {
    console.log('search param', search);
    return execute<Login[]>(loginQueries.readLoginByName, [search, search]);
};

export const readLoginByEmail = async (search: string) => {
    console.log('search param', search);
    return execute<Login[]>(loginQueries.readLoginByEmail, [search]);
};

export const createLogin = async (login: Login) => {
    return execute<OkPacket>(loginQueries.createLogin,
        [login.FIRST_NAME, login.LAST_NAME, login.EMAIL, login.PASSWORD, login.ROLE]);
};

export const updateLogin = async (login: Login) => {
    return execute<OkPacket>(loginQueries.updateLogin, 
        [login.FIRST_NAME, login.LAST_NAME, login.EMAIL, login.PASSWORD, login.ROLE, login.ID ]);
};

export const updatePassword = async (login: Login) => {
    return execute<OkPacket>(loginQueries.updatePassword, 
        [login.PASSWORD, login.ID ]);
};

export const deleteLogin = async (id: number) => {
    return execute<OkPacket>(loginQueries.deleteLogin, [id]);
};