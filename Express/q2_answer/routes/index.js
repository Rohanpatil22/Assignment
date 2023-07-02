import { Router } from "express";
import getRoutes from "./get.routes.js"

const router=Router();

router.use("/get",getRoutes)
export default router;