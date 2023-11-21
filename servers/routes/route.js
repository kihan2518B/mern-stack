import  express  from "express";
import {adduser} from '../controller/user-controller.js';

const router = express.Router();

router.post('/add' , adduser);


export default router;