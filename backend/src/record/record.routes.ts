import { Router } from 'express'
import * as RecordController from './record.controller'

const router = Router();
router.
    route('/record').
    get(RecordController.readMovies);

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
    route('/recird/delete/:ID').
    delete(RecordController.deleteRecord);
    
export default router;