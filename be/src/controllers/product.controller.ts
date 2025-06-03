import { Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service';
import { AuthRequest } from '../middlewares/auth.middleware';

export const addProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const product = await ProductService.addProduct(req.body, req.user.fullName);
    return res.status(201).json(product);
  } catch (err) {
    next(err);
    return;
  }
};

export const getAllProducts = async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const products = await ProductService.getAll(); 
    return res.json(products);
  } catch (err) {
    next(err);
    return;
  }
};

export const getProductById = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const product = await ProductService.getById(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Ürün bulunamadı' });
    }
    return res.json(product);
  } catch (err) {
    next(err);
    return; 
  }
};

export const updateProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const updated = await ProductService.update(Number(req.params.id), req.body, req.user.fullName);
    return res.json(updated);
  } catch (err) {
    next(err);
    return; 
  }
};

export const deleteProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    await ProductService.delete(Number(req.params.id));
    return res.json({ message: 'Ürün silindi' });
  } catch (err) {
    next(err);
    return;
  }
};

export const disableProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    await ProductService.disable(Number(req.params.id), req.user.fullName);
    return res.json({ message: 'Ürün pasif hale getirildi' });
  } catch (err) {
    next(err);
    return;
  }
};
export const enableProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    await ProductService.enable(Number(req.params.id), req.user.fullName);
    return res.json({ message: 'Ürün tekrar aktif hale getirildi' });
  } catch (err) {
    next(err);
    return;
  }
};