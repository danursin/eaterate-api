import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { queries as cookQueries } from "./entities/Cook";
import { queries as dishQueries } from "./entities/Dish";
import { queries as ingredientQueries } from "./entities/Ingredient";
import { queries as unitQueries } from "./entities/Unit";

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            ...cookQueries,
            ...dishQueries,
            ...unitQueries,
            ...ingredientQueries
        }
    })
});

export default schema;
