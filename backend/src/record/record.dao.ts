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

export const createRecord = async (record: Record) => {
    return execute<OkPacket>(recordQueries.createRecord, 
        [record.RECORD_ID, record.HEIGHT_FEET, record.HEIGHT_INCH, record.WEIGHT, record.SEX, record.AGE, record.DOB,
        record.ADDRESS, record.CITY, record.STATE, record.ZIP, record.NOTES, record.HISTORY, record.TEST_RESUALTS ]);
};

export const updateRecord = async (record: Record) => {
    return execute<OkPacket>(recordQueries.updateRecord, 
        [record.HEIGHT_FEET, record.HEIGHT_INCH, record.WEIGHT, record.SEX, record.AGE, record.DOB,
            record.ADDRESS, record.CITY, record.STATE, record.ZIP, record.NOTES, record.HISTORY, record.TEST_RESUALTS, record.RECORD_ID ]);
};

export const updateNotes = async (record: Record) => {
    return execute<OkPacket>(recordQueries.updateNotes, 
        [record.NOTES, record.RECORD_ID ]);
};

export const updateHistory = async (record: Record) => {
    return execute<OkPacket>(recordQueries.updateHistory, 
        [record.HISTORY, record.RECORD_ID ]);
};

export const updateTestResualts = async (record: Record) => {
    return execute<OkPacket>(recordQueries.updateTestResualts, 
        [record.TEST_RESUALTS, record.RECORD_ID ]);
};

export const deleteRecord = async (id: number) => {
    return execute<OkPacket>(recordQueries.deleteRecord, [id]);
};