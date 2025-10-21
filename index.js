const express = require("express");
const app = express();
app.use(express.json());

app.post("/plcdata", (req, res) => {
  console.log("📡 Datos recibidos del PLC:", req.body);
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
