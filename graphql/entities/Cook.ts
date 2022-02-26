import { CookTable, RequestContext } from "../../types";
import { GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import CookEvent from "./CookEvent";
import CookIngredient from "./CookIngredient";
import Dish from "./Dish";

const Cook: GraphQLObjectType = new GraphQLObjectType({
    name: "Cook",
    fields: (): GraphQLFieldConfigMap<CookTable, RequestContext> => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        date_created: { type: GraphQLString },
        recipe: { type: new GraphQLNonNull(GraphQLString) },
        dish: {
            type: new GraphQLNonNull(Dish),
            resolve: ({ dish_id }, _args, { dataSources: { dataService } }) => {
                return dataService.getDish(dish_id);
            }
        },
        events: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CookEvent))),
            resolve: ({ id }, _args, { dataSources: { dataService } }) => {
                return dataService.getCookEvents(id);
            }
        },
        ingredients: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CookIngredient))),
            resolve: ({ id }, _args, { dataSources: { dataService } }) => {
                return dataService.getCookIngredients(id);
            }
        }
    })
});

export const queries: GraphQLFieldConfigMap<unknown, RequestContext> = {
    cooks: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Cook))),
        resolve: (_source, _args, { dataSources: { dataService } }) => {
            return dataService.getCooks();
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
        resolve: (_source, { id }: { id: number }, { dataSources: { dataService } }) => {
            return dataService.getCook(id);
        }
    }
};

export default Cook;
