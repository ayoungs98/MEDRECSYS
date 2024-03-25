import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Login } from './login.model';
import { loginQueries } from './login.queries';

export const readLogin= async () => {
    return execute<Login[]>(loginQueries.readLogin, []);
};

export const readLoginByRecord_Id = async (search: number) => {
    console.log('search param', search);
    return execute<Login[]>(loginQueries.readLoginByRecord_Id, [search]);
};

export const readLoginById = async (search: number) => {
    console.log('search param', search);
    return execute<Login[]>(loginQueries.readLoginById, [search]);
};

export const readLoginByName = async (search: string) => {
    console.log('search param', search);
    return execute<Login[]>(loginQueries.readLoginByName, [search, search]);
};

export const createLogin = async (login: Login) => {
    return execute<OkPacket>(loginQueries.createLogin,
        [login.FIRST_NAME, login.LAST_NAME, login.EMAIL, login.PASSWORD, login.ROLE, login.RECORD_ID ]);
};

export const updateLogin = async (login: Login) => {
    return execute<OkPacket>(loginQueries.updateLogin, 
        [login.FIRST_NAME, login.LAST_NAME, login.EMAIL, login.PASSWORD, login.ROLE, login.RECORD_ID, login.ID ]);
};

export const deleteLogin = async (id: number) => {
    return execute<OkPacket>(loginQueries.deleteLogin, [id]);
};