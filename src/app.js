const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
require("./db/conn");
const port = 5000;
const gameController = require('./controller/gameController');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const staticPath = path.join(__dirname, "../public/module");

app.set("view engine", "hbs");
app.set("views", staticPath);

app.get('/', gameController.getHomePage)
app.post('/audits', gameController.createAudit)
app.get('/audits', gameController.getAudits)
app.get('/audits/:id', gameController.getAudit)
app.patch('/audits/:id', gameController.updateAudit)
app.delete('/audits/:id', gameController.deleteAudit)


app.listen(port, "127.0.0.1", () => console.log("Listening...."));
