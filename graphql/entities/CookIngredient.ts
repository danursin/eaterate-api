import { CookIngredientTable, RequestContext } from "../../types";
import { GraphQLFieldConfigMap, GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import Cook from "./Cook";

const CookIngredient: GraphQLObjectType = new GraphQLObjectType({
    name: "CookIngredient",
    fields: (): GraphQLFieldConfigMap<CookIngredientTable, RequestContext> => ({
        amount: { type: GraphQLFloat },
        description: { type: GraphQLString },
        unit_id: {
            type: GraphQLInt,
            resolve: async ({ unit_id }, _args, { dataSources: { dataService } }) => {
                if (!unit_id) {
                    return null;
                }
                return (await dataService.getUnit(unit_id)).id;
            }
        },
        unit_title: {
            type: GraphQLString,
            resolve: async ({ unit_id }, _args, { dataSources: { dataService } }) => {
                if (!unit_id) {
                    return null;
                }
                return (await dataService.getUnit(unit_id)).title;
            }
        },
        unit_abbreviation: {
            type: GraphQLString,
            resolve: async ({ unit_id }, _args, { dataSources: { dataService } }) => {
                if (!unit_id) {
                    return null;
                }
                return (await dataService.getUnit(unit_id)).abbreviation;
            }
        },
        ingredient_id: {
            type: GraphQLInt,
            resolve: async ({ ingredient_id }, _args, { dataSources: { dataService } }) => {
                return (await dataService.getIngredient(ingredient_id)).id;
            }
        },
        ingredient_title: {
            type: GraphQLString,
            resolve: async ({ ingredient_id }, _args, { dataSources: { dataService } }) => {
                return (await dataService.getIngredient(ingredient_id)).title;
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
