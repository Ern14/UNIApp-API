import { Router } from "express";
import { getUsers } from "../controllers/users.controller";

const router = Router();

router.get('/Home', getUsers);

router.post('/Home', getUsers);

router.get('/Home', getUsers);

router.delete('/Home', getUsers);

router.put('/Home', getUsers);

export default router;