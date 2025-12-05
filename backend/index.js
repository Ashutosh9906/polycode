// import express from "express";
// import { configDotenv } from "dotenv";
// import { resolve } from "path";
// configDotenv();

// const app = express();

// const PORT = process.env.PORT || 8000;

// app.set("view engine", "ejs");
// app.set("views", resolve("./views"));

// app.use(express.json());

// app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Tell Express where the views folder is
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("editor");
});

app.listen(3000, () =>
  console.log("🌐 Server running at http://localhost:3000")
);
