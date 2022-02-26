import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

const Ingredient: GraphQLObjectType = new GraphQLObjectType({
    name: "Ingredient",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        date_created: { type: GraphQLString }
    })
});

export default Ingredient;
