import { Router } from "express";
import { getUsers, createUsers } from "../controllers/users.controller";

const router = Router();

router.get('/users', getUsers);

router.post('/users', createUsers);

router.get('/home',);

router.delete('/home',);

router.put('/home',);

export default router;