import dotenv = require("dotenv");
dotenv.config();

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import DataService from "./services/DataService";
import { RequestContext } from "./types";
import db from "./db";
import express from "express";
import http from "http";
import schema from "./graphql";

(async () => {
    const app = express();
    const httpServer = http.createServer(app);

    const dataService = new DataService(db);
    const server = new ApolloServer<RequestContext>({
        schema,
        dataSources: () => ({ dataService }),
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    app.get("/", (_req, res) => res.send("OK"));

    await server.start();
    server.applyMiddleware({ app });

    const port = process.env.PORT || 4000;
    await new Promise((resolve) => httpServer.listen({ port }, resolve));
    console.log(`Server ready at port ${port}`);
})();
