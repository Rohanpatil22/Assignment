import { Router } from "express";
import getData from "../controllers/post.controller";
import verifiedCredentials from "../middleware/auth.middleware";


const router=Router();

router.get("/Post",verifiedCredentials,getData)

export default router;