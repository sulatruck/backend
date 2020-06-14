import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'VoteType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    feedback_id: {
      type: GraphQLString,
    },
    user_id: {
      type: GraphQLNonNull(GraphQLString),
    },
    rating_id: {
      type: GraphQLString,
    },
    created_at: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updated_at: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  },
});
