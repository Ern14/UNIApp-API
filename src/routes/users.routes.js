import { Router } from "express";
import { getUsers } from "../controllers/users.controller";

const router = Router();

router.get('/users', getUsers);

router.post('/home',);

router.get('/home',);

router.delete('/home',);

router.put('/home',);

export default router;