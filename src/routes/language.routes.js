import { Router } from "express";
import { methods } from "../controllers/language.controller";

const router = Router();

router.get("/api/languages", methods.getLanguages);

export default router;