import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.send("Hello World!");
});

app.listen(3333, () => console.log("🚀 Server running at port: 3333"));
