// src/controllers/user.controller.ts

import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';
import { generateToken } from '../services/auth.service';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.register(req.body, 'self');
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await UserService.login(req.body);

    const token = generateToken({
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    });

    return res.json({ token });
  } catch (err) {
    return res.status(401).json({ message: (err as Error).message });
  }
};
