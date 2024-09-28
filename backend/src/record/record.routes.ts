import { Router } from 'express'
import * as RecordController from './record.controller'

const router = Router();
router.
    route('/record').
    get(RecordController.readRecord);

router.
    route('/record/record_id/:ID').
    get(RecordController.readRecordByRecord_Id);

router.
    route('/record/create').
    post(RecordController.createRecord);

router.
    route('/record/update/').
    put(RecordController.updateRecord);

router.
    route('/record/update/notes/').
    put(RecordController.updateNotes);

router.
    route('/record/update/history/').
    put(RecordController.updateHistory);

router.
    route('/record/update/test').
    put(RecordController.updateTestResualts);

router.
    route('/record/delete/:ID').
    delete(RecordController.deleteRecord);
    
export default router;