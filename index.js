import express from "express";
import menteRoutes from "./routes/menteRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", menteRoutes);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}/api`);
});
