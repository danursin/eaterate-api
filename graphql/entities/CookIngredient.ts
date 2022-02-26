import { GraphQLFieldConfigMap, GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import Cook from "./Cook";
import Ingredient from "./Ingredient";
import { RequestContext } from "../../types";
import Unit from "./Unit";

interface CookIngredientTable {
    cook_id: number;
    ingredient_id: number;
    unit_id: number | null;
    amount: number | null;
    description: string | null;
}

const CookIngredient: GraphQLObjectType = new GraphQLObjectType({
    name: "CookIngredient",
    fields: (): GraphQLFieldConfigMap<CookIngredientTable, RequestContext> => ({
        amount: { type: GraphQLFloat },
        description: { type: GraphQLString },
        unit: {
            type: Unit,
            resolve: ({ unit_id }, _args, { db }) => {
                return db.withSchema("eat").table("Unit").where({ id: unit_id }).first();
            }
        },
        ingredient: {
            type: new GraphQLNonNull(Ingredient),
            resolve: ({ ingredient_id }, _args, { db }) => {
                return db.withSchema("eat").table("Ingredient").where({ id: ingredient_id }).first();
            }
        },
        cook: {
            type: new GraphQLNonNull(Cook),
            resolve: ({ cook_id }, _args, { db }) => {
                return db.withSchema("eat").table("Cook").where({ id: cook_id }).first();
            }
        }
    })
});

export default CookIngredient;
