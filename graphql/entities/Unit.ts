import { GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import { RequestContext } from "../../types";

const Unit: GraphQLObjectType = new GraphQLObjectType({
    name: "Unit",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        abbreviation: { type: new GraphQLNonNull(GraphQLString) }
    })
});

export const queries: GraphQLFieldConfigMap<unknown, RequestContext> = {
    units: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Unit))),
        resolve: (_source, _args, { dataSources: { dataService } }) => {
            return dataService.getUnits();
        }
    },
    unit: {
        type: Unit,
        args: {
            id: {
                description: "Unit `id`",
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve: (_source, { id }: { id: number }, { dataSources: { dataService } }) => {
            return dataService.getUnit(id);
        }
    }
};

export default Unit;
