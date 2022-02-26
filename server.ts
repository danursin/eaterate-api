import dotenv = require("dotenv");
dotenv.config();

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { RequestContext } from "./types";
import db from "./db";
import express from "express";
import http from "http";
import schema from "./graphql";

(async () => {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer<RequestContext>({
        schema,
        context: () => {
            return { db };
        },
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    await server.start();
    server.applyMiddleware({ app });

    const port = process.env.PORT || 4000;
    await new Promise((resolve) => httpServer.listen({ port }, resolve));
    console.log(`Server ready at port ${port}`);
})();
