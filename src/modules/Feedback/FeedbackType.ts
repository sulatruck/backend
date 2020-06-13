import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'FeedbackType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    subject: {
      type: GraphQLNonNull(GraphQLString),
    },
    body: {
      type: GraphQLNonNull(GraphQLString),
    },
    like_count: {
      type: GraphQLNonNull(GraphQLInt),
    },
    rating: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    anonymous: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    author_id: {
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
