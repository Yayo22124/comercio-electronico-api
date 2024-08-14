import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import Productos from "./Productos.js";

const Pedidos = sequelize.define(
  "Pedidos",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Producto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Productos,
        key: "ID",
      },
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fecha_Registro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Fecha_Actualizacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Total_Productos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Costo_total: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "tbb_pedidos",
  }
);

Productos.hasMany(Pedidos, { foreignKey: "Producto_id" });

export default Pedidos;
