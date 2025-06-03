import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { sequelize } from '../config/db';
import BaseModel from './BaseModel';

class Product extends BaseModel<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare name: string;
  declare description?: string;
  declare price: number;
}

Product.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.FLOAT, allowNull: false },
    createdBy: { type: DataTypes.STRING, allowNull: true },
    updatedBy: { type: DataTypes.STRING, allowNull: true },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
  },
  {
    sequelize,
    tableName: 'products',
    timestamps: true,
  }
);

export default Product;
