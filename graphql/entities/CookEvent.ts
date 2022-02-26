import { CookEventTable, RequestContext } from "../../types";
import { GraphQLFieldConfigMap, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import Cook from "./Cook";

const type: GraphQLObjectType = new GraphQLObjectType({
    name: "CookEvent",
    fields: (): GraphQLFieldConfigMap<CookEventTable, RequestContext> => ({
        id: { type: GraphQLInt },
        date_created: { type: new GraphQLNonNull(GraphQLString) },
        probe_temp: { type: GraphQLInt },
        ambient_temp: { type: GraphQLInt },
        notes: { type: GraphQLString },

        cook: {
            type: new GraphQLNonNull(Cook),
            resolve: ({ cook_id }, _args, { dataSources: { dataService } }) => {
                return dataService.getCook(cook_id);
            }
        }
    })
});

export default type;
