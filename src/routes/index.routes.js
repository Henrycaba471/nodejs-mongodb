import { Router } from "express";
import { home, addTask, about, editGet, editPost, deleteTask, done } from "../controllers/index";
const router = Router();

router.get('/', home);
router.post('/task/add', addTask);
router.get('/about', about);
router.get('/edit/:id', editGet);
router.post('/edit/:id', editPost);
router.get('/delete/:id', deleteTask);
router.get('/done/:id', done);

export default router;

