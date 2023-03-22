const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
//converts body to json

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
app.get("/tshirt", (req, res) => {
  //route
  //callback function
  res.status(200).send({
    tshirt: "tshirt",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  //route params
  //creates a new data
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `tshirt with your ${logo}`,
  });
});
