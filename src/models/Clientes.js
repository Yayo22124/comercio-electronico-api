import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import Personas from "./Personas.js";

const Clientes = sequelize.define(
  "Clientes",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Persona_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Personas,
        key: "id",
      },
    },
    Clave_Cliente: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    Tipo_Volumen: {
      type: DataTypes.ENUM("Mayorista", "Minorista", "Medio Mayoreo", "Normal"),
      defaultValue: "Normal",
    },
    Tipo_Frecuencia: {
      type: DataTypes.ENUM(
        "Nuevo",
        "Recurente",
        "Ocasional",
        "Frecuente",
        "Esporádico",
        "Compra Única"
      ),
      allowNull: false,
      defaultValue: "Nuevo",
    },
    Tipo_Nivel: {
      type: DataTypes.ENUM("Regular", "Oro", "Plata", "Bronce", "Diamante"),
      allowNull: false,
      defaultValue: "Regular",
    },
    Total_Productos_Comprados: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Total_Compras: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    Fecha_Ultima_Compra: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    },
    Estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    Fecha_Registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    Fecha_Actualizacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    tableName: "tbb_clientes",
  }
);

Clientes.hasOne(Personas, { foreignKey: "Persona_ID" });

export default Clientes;
