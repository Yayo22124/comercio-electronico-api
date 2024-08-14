import express from "express";
import { getAllProducts, getClientsCount, getSolds, getTotalProductsSolds, getTotalSolds } from "../controllers/index.js";

const router = express.Router();
const prefix = '/v1';

router.get(`${prefix}/products`, getAllProducts);
router.get(`${prefix}/clients/count`, getClientsCount);
router.get(`${prefix}/solds`, getSolds);
router.get(`${prefix}/solds/total`, getTotalSolds);
router.get(`${prefix}/solds/total/products`, getTotalProductsSolds);

export default router;