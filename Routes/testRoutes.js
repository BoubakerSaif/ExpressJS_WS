import express from "express";
import { getData, postData } from "../Controllers/testControllers.js";

const router = express.Router();

router.get("/user", getData);

router.post("/user", postData);

export default router;
