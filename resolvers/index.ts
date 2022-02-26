import db from "../db";

const resolvers = {
    Query: {
        cooks: () => {
            return db.select().withSchema("eat").table("cook");
        },
        cook: (id: number) => {
            return db.select().withSchema("eat").table("cook").where({ id }).first();
        },
        dishes: () => {
            return db.select().withSchema("eat").table("dish");
        },
        dish: (parent: any, { id }: any) => {
            return db.select().withSchema("eat").table("dish").where({ id }).first();
        }
    }
};

export default resolvers;
