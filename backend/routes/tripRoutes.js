import express from "express";
import { createTrip, getTrips } from "../controllers/tripControllers.js";
import { userAuth } from "../middleware/userAuth.js";

const router = express.Router();

router.post("/create", userAuth, createTrip);
router.get("/mytrips", userAuth, getTrips);

export default router;
