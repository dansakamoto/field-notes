import express from "express";
import ViteExpress from "vite-express";

const name = "Field Notes";
const port = 3000;
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("dist"));

  app.use((_req, res) => {
    res.redirect("/");
  });

  app.listen(port, () => {
    console.log(`${name} running in production mode on port ${port}`);
  });
} else {
  ViteExpress.listen(app, port, () => {
    console.log(`${name} running in development mode on port ${port}`);
  });
}
