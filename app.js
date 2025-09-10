import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// In-memory posts
let posts = [];

// Routes
app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.post("/add", (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: Date.now(), title, content });
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (!post) return res.redirect("/");
  res.render("edit", { post });
});

app.post("/edit/:id", (req, res) => {
  const { title, content } = req.body;
  posts = posts.map((p) =>
    p.id == req.params.id ? { ...p, title, content } : p
  );
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  posts = posts.filter((p) => p.id != req.params.id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Blog app running at http://localhost:${port}`);
});
