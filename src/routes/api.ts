import { Router } from 'express';
import userController from '../controllers/user.controller';

export const router = Router();

router.post('/auth-user', userController.userRegister);
