import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Personas = sequelize.define(
  "Personas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Primer_Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Segundo_Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fecha_Nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "tbb_personas" }
);

export default Personas;