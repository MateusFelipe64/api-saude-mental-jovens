import express from "express";
import autocuidado from "../data/autocuidado.js";
import apoio from "../data/apoio.js";
import bullying from "../data/bullying.js";

const router = express.Router();

router.get("/autocuidado", (req, res) => {
  res.json(autocuidado);
});

router.get("/apoio", (req, res) => {
  res.json(apoio);
});

router.get("/bullying", (req, res) => {
  res.json(bullying);
});

export default router;
