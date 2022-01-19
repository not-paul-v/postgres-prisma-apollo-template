import { PrismaClient } from "prisma/generated/prisma-client";

export type Context = {
    req: Request;
    res: Response;
    prisma: PrismaClient;
};
