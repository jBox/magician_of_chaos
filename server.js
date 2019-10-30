const express = require("express");
const app = express();
const port = parseInt(process.env.PORT || "13037");

const PAGES = "pages";
const PUBLIC = "public";


app.use(express.static(PAGES));
app.use(`/${PUBLIC}`, express.static(PUBLIC));

// Listen
app.listen(port);