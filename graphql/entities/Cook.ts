import { GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import CookEvent from "./CookEvent";
import CookIngredient from "./CookIngredient";
import Dish from "./Dish";
import { RequestContext } from "../../types";

interface CookTable {
    id: number;
    dish_id: number;
    title: string;
    date_created: string;
}

const Cook: GraphQLObjectType = new GraphQLObjectType({
    name: "Cook",
    fields: (): GraphQLFieldConfigMap<CookTable, RequestContext> => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        date_created: { type: GraphQLString },
        recipe: { type: new GraphQLNonNull(GraphQLString) },
        dish: {
            type: new GraphQLNonNull(Dish),
            resolve: ({ id }, _args, { db }) => {
                return db.withSchema("eat").table("Dish").where({ cook_id: id }).first();
            }
        },
        events: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CookEvent))),
            resolve: ({ id }, _args, { db }) => {
                return db.withSchema("eat").table("CookEvent").where({ cook_id: id });
            }
        },
        ingredients: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CookIngredient))),
            resolve: ({ id }, _args, { db }) => {
                return db.withSchema("eat").table("CookIngredient").where({ cook_id: id });
            }
        }
    })
});

export const queries: GraphQLFieldConfigMap<unknown, RequestContext> = {
    cooks: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Cook))),
        resolve: (_source, _args, { db }) => {
            return db.withSchema("eat").table("Cook");
        }
    },
    cook: {
        type: Cook,
        args: {
            id: {
                description: "Cook `id`",
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve: (_source, { id }: { id: number }, { db }) => {
            return db.withSchema("eat").table("Cook").where({ id }).first();
        }
    }
};

export default Cook;
