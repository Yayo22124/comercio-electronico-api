import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Productos = sequelize.define(
  "Productos",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Marca: {
      type: DataTypes.DECIMAL(10, 2),
      type: DataTypes.STRING,
      allowNull: false,
    },
    Codigo_Barras: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Presentacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Precio_Actual: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    Fotografia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Estatus: {
      type: DataTypes.BOOLEAN,
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
  },
  {
    timestamps: false,
    tableName: "tbb_productos",
  }
);

export default Productos;
