import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'VoteType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    feedback_id: {
      type: GraphQLNonNull(GraphQLString),
    },
    user_id: {
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
