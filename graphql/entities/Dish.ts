import { GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import Cook from "./Cook";
import { RequestContext } from "../../types";

const Dish: GraphQLObjectType = new GraphQLObjectType({
    name: "Dish",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: new GraphQLNonNull(GraphQLString) },
        date_created: { type: new GraphQLNonNull(GraphQLString) },
        cooks: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Cook))) }
    })
});

export const queries: GraphQLFieldConfigMap<unknown, RequestContext> = {
    dishes: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Dish))),
        resolve: (_source, _args, { dataSources: { dataService } }) => {
            return dataService.getDishes();
        }
    },
    dish: {
        type: Dish,
        args: {
            id: {
                description: "Dish `id`",
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve: (_source, { id }: { id: number }, { dataSources: { dataService } }) => {
            return dataService.getDish(id);
        }
    }
};

export default Dish;
