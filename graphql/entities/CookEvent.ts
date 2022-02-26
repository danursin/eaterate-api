import { GraphQLFieldConfigMap, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import Cook from "./Cook";
import { RequestContext } from "../../types";

interface CookEventTable {
    id: number;
    cook_id: number;
    date_created: string;
    probe_temp: number | null;
    ambient_temp: number | null;
    notes: string | null;
}

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
            resolve: ({ cook_id }, _args, { db }) => {
                return db.withSchema("eat").table("Cook").where({ cook_id }).first();
            }
        }
    })
});

export default type;
