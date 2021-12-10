import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.get('/', (req, res) => userController.users(req, res));
router.post('/', (req, res) => userController.create(req, res));
router.get('/:id', (req, res) => userController.user(req, res));
router.delete('/', (req, res) => userController.delete(req, res));
router.put('/', (req, res) => userController.update(req, res));

export default router;