import express from 'express';
import { register, login } from '../controllers/user.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Kullanıcı işlemleri
 */

/**
* @swagger
 * /api/users/register:
 *   post:
 *     summary: Yeni kullanıcı kaydı
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - password
 *               - confirmPassword
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: Kayıt başarılı
 *       400:
 *         description: Hatalı istek
 */
router.post('/register', register);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Kullanıcı girişi
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Giriş başarılı
 *       401:
 *         description: Geçersiz bilgiler
 */
router.post('/login', login);


router.get('/profile', authenticateToken, (req, res) => {
  // @ts-ignore
  res.json({ message: 'Korunan alana deneme', user: req.user });
});
export default router;
