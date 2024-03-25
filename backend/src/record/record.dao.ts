import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Record } from './record.model';
import { recordQueries } from './record.queries';

export const readRecord = async () => {
    return execute<Record[]>(recordQueries.readRecord, []);
};

export const readRecordByRecord_Id = async (ID: number) => {
    return execute<Record[]>(recordQueries.readRecordByRecord_Id, [ID]);
};

export const createRecord = async (movies: Record) => {
    return execute<OkPacket>(recordQueries.createRecord, 
        [ ]);
};

export const updateRecord = async (movies: Record) => {
    return execute<OkPacket>(recordQueries.updateRecord, 
        [ ]);
};

export const deleteRecord = async (ID: number) => {
    return execute<OkPacket>(recordQueries.deleteRecord, [ID]);
};