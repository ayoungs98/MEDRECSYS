import { Router } from 'express'
import * as LoginController from './login.controller';

const router = Router();
router.
    route('/login').
    get(LoginController.readLogin);

router.
    route('/login/record_id/:id').
    get(LoginController.readLoginByRecord_Id);

router.
    route('/login/id/:id').
    get(LoginController.readLoginById);

router.
    route('/login/name/:search').
    get(LoginController.readLoginByName);

router.
    route('/login/email/:search').
    get(LoginController.readLoginByEmail);

router.
    route('/login/create').
    post(LoginController.createLogin);

router.
    route('/login/update').
    put(LoginController.updateLogin);

router.
    route('/login/delete/:id').
    delete(LoginController.deleteLogin);
    
export default router;