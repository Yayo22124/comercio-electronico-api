import Productos from "../models/Productos.js";
import Clientes from "../models/Clientes.js";
import Pedidos from "../models/Pedidos.js";

export const getAllProducts = async (req, res) =>
  await Productos.findAll()
    .then((products) => res.json(products))
    .catch((error) => res.json(error));

export const getClientsCount = async (req, res) =>
  await Clientes.count()
    .then((count) => res.json({ count }))
    .catch((error) => res.json(error));

export const getSolds = async (req, res) =>
  await Pedidos.findAll()
    .then((solds) => res.json(solds))
    .catch((error) => res.json(error));

export const getTotalSolds = async (req, res) =>
  await Pedidos.sum("Costo_total")
    .then((total) => res.json({ total }))
    .catch((error) => res.json(error));

export const getTotalProductsSolds = async (req, res) =>
  await Pedidos.sum("Total_Productos")
    .then((total) => res.json({ total }))
    .catch((error) => res.json(error));