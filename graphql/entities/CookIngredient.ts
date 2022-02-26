import { CookIngredientTable, RequestContext } from "../../types";
import { GraphQLFieldConfigMap, GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import Cook from "./Cook";
import Ingredient from "./Ingredient";
import Unit from "./Unit";

const CookIngredient: GraphQLObjectType = new GraphQLObjectType({
    name: "CookIngredient",
    fields: (): GraphQLFieldConfigMap<CookIngredientTable, RequestContext> => ({
        amount: { type: GraphQLFloat },
        description: { type: GraphQLString },
        unit: {
            type: Unit,
            resolve: ({ unit_id }, _args, { dataSources: { dataService } }) => {
                if (!unit_id) {
                    return null;
                }
                return dataService.getUnit(unit_id);
            }
        },
        ingredient: {
            type: new GraphQLNonNull(Ingredient),
            resolve: ({ ingredient_id }, _args, { dataSources: { dataService } }) => {
                return dataService.getIngredient(ingredient_id);
            }
        },
        cook: {
            type: new GraphQLNonNull(Cook),
            resolve: ({ cook_id }, _args, { dataSources: { dataService } }) => {
                return dataService.getCook(cook_id);
            }
        }
    })
});

export default CookIngredient;
