import { Request, Response } from 'express';
import UserModel, { userDTO } from '../models/user.model';

export default {
  async userRegister(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      await userDTO.validate({
        username,
        email,
        password,
      });
      const user = await UserModel.create({ username, email, password });
      if (!user)
        return res
          .status(500)
          .json({ message: 'User not created', data: null });
      res.status(201).json({
        meta: {
          message: 'User created successfully',
        },
        data: user,
      });
    } catch (error) {
      const err = error as unknown as Error;
      res.status(500).json({
        message: err.message,
        data: null,
      });
    }
  },
};
