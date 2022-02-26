import { GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import { RequestContext } from "../../types";

const Ingredient: GraphQLObjectType = new GraphQLObjectType({
    name: "Ingredient",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        date_created: { type: GraphQLString }
    })
});

export const queries: GraphQLFieldConfigMap<unknown, RequestContext> = {
    ingredients: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Ingredient))),
        resolve: (_source, _args, { dataSources: { dataService } }) => {
            return dataService.getIngredients();
        }
    },
    ingredient: {
        type: Ingredient,
        args: {
            id: {
                description: "Ingredient `id`",
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve: (_source, { id }: { id: number }, { dataSources: { dataService } }) => {
            return dataService.getIngredient(id);
        }
    }
};

export default Ingredient;
