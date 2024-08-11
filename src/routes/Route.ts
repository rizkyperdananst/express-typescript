import express from "express";
import RoleControllers from "../controllers/RoleControllers";
import UserController from "../controllers/UserController";

const router = express.Router();

router.get('/role', RoleControllers.GetRole);
router.post('/role', RoleControllers.CreateRole);
router.get('/role/:id', RoleControllers.GetRoleById);
router.patch('/role/:id', RoleControllers.UpdateRole);
router.delete('/role/:id', RoleControllers.DeleteRole);

// user routing
router.post('/user/register', UserController.Register);

export default router;