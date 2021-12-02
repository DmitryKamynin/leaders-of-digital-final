// eslint-disable-next-line @typescript-eslint/no-var-requires
const history = require("connect-history-api-fallback");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const compression = require("compression");

const app = express();

app.use(history());
app.use(compression());
app.use(express.static("./dist"));
app.listen(process.env.PORT || 3000);
