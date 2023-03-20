import express from "express";
import cors from "cors";
import apiRouter from "./api";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";


const apiRoot = "/api";
const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());
app.use(cors())
if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use("/health", (_, res) => res.sendStatus(200));
const ngo = require("./routes/ngo");
app.use("/api/ngo", ngo);
app.use(clientRouter(apiRoot));
app.use(logErrors());

export default app;
