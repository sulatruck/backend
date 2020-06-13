import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
    created_at: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updated_at: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  },
});
