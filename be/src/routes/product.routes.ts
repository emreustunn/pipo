import express from 'express';
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  disableProduct,
  enableProduct
} from '../controllers/product.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import { authorizeRoles } from '../middlewares/authorize.middleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Ürün işlemleri
 */

/**
 * @swagger
 * /api/products/add:
 *   post:
 *     summary: Yeni ürün ekle (sadece admin)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Ürün başarıyla eklendi
 */
router.post('/add', authenticateToken, authorizeRoles('admin'), addProduct);

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Tüm ürünleri getir
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Ürün listesi
 */
router.get('/', getAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: ID ile ürün getir
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ürün bulundu
 *       404:
 *         description: Ürün bulunamadı
 */
router.get('/:id', getProductById);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Ürün güncelle (admin)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Güncellendi
 *       404:
 *         description: Bulunamadı
 */
router.put('/:id', authenticateToken, authorizeRoles('admin'), updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Ürün sil (admin)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Silindi
 *       404:
 *         description: Bulunamadı
 */
router.delete('/:id', authenticateToken, authorizeRoles('admin'), deleteProduct);

/**
 * @swagger
 * /api/products/disable/{id}:
 *   patch:
 *     summary: Ürünü geçici olarak pasif yap (admin)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ürün pasif hale getirildi
 *       404:
 *         description: Ürün bulunamadı
 *       403:
 *         description: Erişim reddedildi
 */
router.patch('/disable/:id', authenticateToken, authorizeRoles('admin'), disableProduct);

/**
 * @swagger
 * /api/products/enable/{id}:
 *   patch:
 *     summary: Pasif ürünü tekrar aktif yap (admin)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ürün aktif hale getirildi
 *       404:
 *         description: Ürün bulunamadı
 *       403:
 *         description: Erişim reddedildi
 */
router.patch('/enable/:id', authenticateToken, authorizeRoles('admin'), enableProduct);
export default router;
