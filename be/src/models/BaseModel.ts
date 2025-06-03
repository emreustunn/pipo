import {
  Model,
  CreationOptional
} from 'sequelize';

export default class BaseModel<
  TModelAttributes extends {},
  TCreationAttributes extends {}
> extends Model<TModelAttributes, TCreationAttributes> {
  declare id: CreationOptional<number>;
  declare createdBy: CreationOptional<string | null>;
  declare updatedBy: CreationOptional<string | null>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare isActive: CreationOptional<boolean>;
}
