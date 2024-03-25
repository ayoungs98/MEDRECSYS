import { Request, RequestHandler, Response } from 'express';
import { Record } from './record.model'
import * as RecordDAO from './record.dao';
import { OkPacket } from 'mysql';

export const readMovies: RequestHandler = async (req: Request, res: Response) => {
    try {
        let record;
        let ID = parseInt(req.query.ID as string);

        console.log('ID', ID);
        if (Number.isNaN(ID)) {
            record = await RecordDAO.readRecord();
       
        }
        res.status(200).json(
            record
        );
    } catch (error) {
        console.error('[record.controller][readRecord][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching record'
        });
    }
};

export const readRecordByRecord_Id: RequestHandler = async (req: Request, res: Response) => {
    try {

        let record;
        let ID = parseInt(req.params.ID as string);

        console.log('ID', ID);
        if (!Number.isNaN(ID)) {
            record = await RecordDAO.readRecordByRecord_Id(ID);
        }
        res.status(200).json(
            record
        );
    } catch (error) {
        console.error('[record.controller][readRecordByRecord_Id][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching record'
        });
    }
};

export const createRecord: RequestHandler = async (req: Request, res: Response) => {
    try {
        const OkPacket: OkPacket = await RecordDAO.createRecord(req.body);

        console.log('req.body', req.body);
        console.log('movies', OkPacket);
          
        res.status(200).json(
            OkPacket
        );
    } catch (error) {
        console.error('[record.controller][createRecord][Error]', error);
        res.status(500).json({
            message: 'There was an error when writing record'
        });
    }
};

export const updateRecord: RequestHandler = async (req: Request, res: Response) => {
    try {
        const OkPacket: OkPacket = await RecordDAO.updateRecord(req.body);

        console.log('req.body', req.body);

        console.log('record', OkPacket);
          
        res.status(200).json(
            OkPacket
        );
    } catch (error) {
        console.error('[record.controller][updateRecord][Error]', error);
        res.status(500).json({
            message: 'There was an error when writing record'
        });
    }
};

export const deleteRecord: RequestHandler = async (req: Request, res: Response) => {
    try {
        let ID = parseInt(req.params.movieId as string);

        console.log('ID', ID);
        if (!Number.isNaN(ID)) {
            const response = await RecordDAO.deleteRecord(ID);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for ID");
        }

    } catch (error) {
        console.error('[record.controller][deleteRecord][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting record'
        });
    }
};