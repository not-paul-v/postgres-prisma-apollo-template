# Project Template

Using:

-   [postgreSQL]()
-   [prisma](https://www.prisma.io/docs/concepts/components/prisma-client)
-   [typegraphql-prisma](https://prisma.typegraphql.com/)
-   [type-graphql](https://typegraphql.com/docs/getting-started.html)
-   [apollo-server](https://www.apollographql.com/docs/tutorial/introduction/)

### prisma

1. Write schema
2. Migration `npx prisma migrate dev --name [name]`
3. Generate client `npx prisma generate`

### typegraphql-prisma

Generate types and graphql crud operations `npm run codegen`

### example resolver

```javascript
@Resolver(Inflow)
export class InflowResolver {
    @FieldResolver(() => User, { nullable: true })
    async user(@Root() inflow: Inflow, @Ctx() { prisma }: Context) {
        ...
    }

    @Query(() => PaginatedInflow)
    async inflows(
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => String, { nullable: true }) cursor: string | null,
        @Ctx() { prisma }: Context
    ) {
        ...
    }

    @Mutation(() => Inflow)
    async addInflow() {
        ...
    }
}
```
