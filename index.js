import express from "express";
import cors from "cors";
import menteRoutes from "./routes/menteRoutes.js";

const app = express();
const PORT = 3001;

app.use(cors()); // Permite requisições de outros domínios
app.use(express.json());
app.use("/api", menteRoutes);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});