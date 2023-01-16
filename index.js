const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

dotenv.config();
//routes
const empresaGetRoute = require("./routes/empresas/empresaGet");
const empresaPostRoute = require("./routes/empresas/empresaPost");
const empresaPutRoute = require("./routes/empresas/empresaPut");
const empresaDeleteRoute = require("./routes/empresas/empresaDelete");


const port = process.env.PORT || 3001;

//routes
app.use("/api/db/empresa/get", empresaGetRoute);
app.use("/api/db/empresa/post", empresaPostRoute);
app.use("/api/db/empresa/put", empresaPutRoute);
app.use("/api/db/empresa/delete", empresaDeleteRoute);

app.listen(port, () => console.log("servidor esta ligado"));
