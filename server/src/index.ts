import express from "express";
import userRoutes from "./routes/user";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
