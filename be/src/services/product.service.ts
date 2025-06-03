import Product from '../models/Product';

export class ProductService {
  static async addProduct(data: any, createdBy: string) {
    return await Product.create({ ...data, createdBy });
  }

static async getAll() {
  return await Product.findAll({ where: { isActive: true } });
}

  static async getById(id: number) {
    return await Product.findByPk(id);
  }

  static async update(id: number, updates: any, updatedBy: string) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Ürün bulunamadı');
    await product.update({ ...updates, updatedBy });
    return product;
  }

  static async delete(id: number) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Ürün bulunamadı');
    await product.destroy();
  }
  
  static async disable(id: number, updatedBy: string) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Ürün bulunamadı');

    product.isActive = false;
    product.updatedBy = updatedBy;
    await product.save();

    return product;
  }
    static async enable(id: number, updatedBy: string) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Ürün bulunamadı');

    product.isActive = true;
    product.updatedBy = updatedBy;
    await product.save();

    return product;
  }
}