import { Router } from "express";

const router = Router();

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to FitMentor API!" });
});

export default router;
