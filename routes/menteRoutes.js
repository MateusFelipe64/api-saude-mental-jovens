import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// AUTOCUIDADO CRUD

router.get("/autocuidado", async (req, res) => {
  const data = await prisma.autocuidado.findMany();
  res.json(data);
});

router.get("/autocuidado/:id", async (req, res) => {
  const { id } = req.params;
  const item = await prisma.autocuidado.findUnique({ where: { id: Number(id) } });
  if (!item) return res.status(404).json({ error: "Não encontrado" });
  res.json(item);
});

router.post("/autocuidado", async (req, res) => {
  const { titulo, descricao } = req.body;
  const novo = await prisma.autocuidado.create({ data: { titulo, descricao } });
  res.status(201).json(novo);
});

router.put("/autocuidado/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao } = req.body;
  try {
    const atualizado = await prisma.autocuidado.update({
      where: { id: Number(id) },
      data: { titulo, descricao },
    });
    res.json(atualizado);
  } catch {
    res.status(404).json({ error: "Não encontrado" });
  }
});

router.delete("/autocuidado/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.autocuidado.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } catch {
    res.status(404).json({ error: "Não encontrado" });
  }
});

// APOIO CRUD

router.get("/apoio", async (req, res) => {
  const data = await prisma.apoio.findMany();
  res.json(data);
});

router.get("/apoio/:id", async (req, res) => {
  const { id } = req.params;
  const item = await prisma.apoio.findUnique({ where: { id: Number(id) } });
  if (!item) return res.status(404).json({ error: "Não encontrado" });
  res.json(item);
});

router.post("/apoio", async (req, res) => {
  const { nome, contato, url, descricao } = req.body;
  const novo = await prisma.apoio.create({ data: { nome, contato, url, descricao } });
  res.status(201).json(novo);
});

router.put("/apoio/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, contato, url, descricao } = req.body;
  try {
    const atualizado = await prisma.apoio.update({
      where: { id: Number(id) },
      data: { nome, contato, url, descricao },
    });
    res.json(atualizado);
  } catch {
    res.status(404).json({ error: "Não encontrado" });
  }
});

router.delete("/apoio/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.apoio.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } catch {
    res.status(404).json({ error: "Não encontrado" });
  }
});

// BULLYING CRUD

router.get("/bullying", async (req, res) => {
  const data = await prisma.bullying.findMany();
  res.json(data);
});

router.get("/bullying/:id", async (req, res) => {
  const { id } = req.params;
  const item = await prisma.bullying.findUnique({ where: { id: Number(id) } });
  if (!item) return res.status(404).json({ error: "Não encontrado" });
  res.json(item);
});

router.post("/bullying", async (req, res) => {
  const { tipo, descricao, como_agir } = req.body;
  const novo = await prisma.bullying.create({ data: { tipo, descricao, como_agir } });
  res.status(201).json(novo);
});

router.put("/bullying/:id", async (req, res) => {
  const { id } = req.params;
  const { tipo, descricao, como_agir } = req.body;
  try {
    const atualizado = await prisma.bullying.update({
      where: { id: Number(id) },
      data: { tipo, descricao, como_agir },
    });
    res.json(atualizado);
  } catch {
    res.status(404).json({ error: "Não encontrado" });
  }
});

router.delete("/bullying/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.bullying.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } catch {
    res.status(404).json({ error: "Não encontrado" });
  }
});

export default router;