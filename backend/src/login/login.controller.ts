import { Request, RequestHandler, Response } from 'express';
import { Login } from './login.model';
import * as LoginDAO from './login.dao';
import { OkPacket } from 'mysql';

export const readLogin: RequestHandler = async (req: Request, res: Response) => {
    try {
        let login;
        let id = parseInt(req.query.id as string);

        console.log('id', id);
        if (Number.isNaN(id)) {
            login = await LoginDAO.readLogin();
        }
        res.status(200).json(
            login
        );
    } catch (error) {
        console.error('[login.controller][readLogin][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching login'
        });
    }
};

export const readLoginByRecord_Id: RequestHandler = async (req: Request, res: Response) => {
    try {

        let login;
        let id = parseInt(req.params.id as string);

        console.log('id', id);
        if (!Number.isNaN(id)) {
            login = await LoginDAO.readLoginByRecord_Id(id);
        }
        res.status(200).json(
            login
        );
    } catch (error) {
        console.error('[login.controller][readLogin][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching login'
        });
    }
};

export const readLoginById: RequestHandler = async (req: Request, res: Response) => {
    try {

        let login;
        let id = parseInt(req.params.id as string);

        console.log('id', id);
        if (!Number.isNaN(id)) {
            login = await LoginDAO.readLoginById(id);
        }
        res.status(200).json(
            login
        );
    } catch (error) {
        console.error('[login.controller][readLogin][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching login'
        });
    }
};

export const readLoginByName: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.readLoginByName);
        const login = await LoginDAO.readLoginByName('%' + req.params.search + '%');

        res.status(200).json(
            login
        );
    } catch (error) {
        console.error(`[login.controller][readLoginByName][Error]`, error);
        res.status(500).json({
            message: 'There was an error when fetching login'
        });
    }
};

export const readLoginByEmail: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.readLoginByEmail);
        const login = await LoginDAO.readLoginByEmail('%' + req.params.search + '%');

        res.status(200).json(
            login
        );
    } catch (error) {
        console.error(`[login.controller][readLoginByName][Error]`, error);
        res.status(500).json({
            message: 'There was an error when fetching login'
        });
    }
};

export const createLogin: RequestHandler = async (req: Request, res: Response) => {
    try {
        const OkPacket: OkPacket = await LoginDAO.createLogin(req.body);

        console.log('req.body', req.body);
        console.log('login', OkPacket);
          
        res.status(200).json(
            OkPacket
        );
    } catch (error) {
        console.error('[login.controller][createLogin][Error]', error);
        res.status(500).json({
            message: 'There was an error when writing login'
        });
    }
};

export const updateLogin: RequestHandler = async (req: Request, res: Response) => {
    try {
        const OkPacket: OkPacket = await LoginDAO.updateLogin(req.body);

        console.log('req.body', req.body);

        console.log('login', OkPacket);
          
        res.status(200).json(
            OkPacket
        );
    } catch (error) {
        console.error('[login.controller][updateLogin][Error]', error);
        res.status(500).json({
            message: 'There was an error when writing login'
        });
    }
};

export const deleteLogin: RequestHandler = async (req: Request, res: Response) => {
    try {
        let id = parseInt(req.params.id as string);

        console.log('id', id);
        if (!Number.isNaN(id)) {
            const response = await LoginDAO.deleteLogin(id);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for id");
        }

    } catch (error) {
        console.error('[login.controller][deleteLogin][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting login'
        });
    }
};