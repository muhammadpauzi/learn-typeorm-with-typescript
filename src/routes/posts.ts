import { Router } from "express";
import PostController from "../controllers/PostController";

const router = Router();
const postController = new PostController();

router.get('/', (req, res) => postController.posts(req, res));
// router.post('/', (req, res) => postController.create(req, res));
// router.get('/:id', (req, res) => postController.post(req, res));
// router.delete('/', (req, res) => postController.delete(req, res));
// router.put('/', (req, res) => postController.update(req, res));

export default router;