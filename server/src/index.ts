import "reflect-metadata";
import express from "express";
import cors from "cors";
// import session from "express-session";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "../prisma/generated/prisma-client";

const main = async () => {
    const app = express();
    const prisma = new PrismaClient();

    app.use(
        cors({
            origin: "*",
            credentials: true,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                /* add resolvers */
            ],
        }),
        context: ({ req, res }) => ({
            req,
            res,
            prisma,
        }),
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        cors: false,
    });

    app.listen(parseInt(process.env.PORT || "8000"), () => {
        console.log("server started on localhost:4000");
    });
};

main().catch((err) => {
    console.error(err);
});
