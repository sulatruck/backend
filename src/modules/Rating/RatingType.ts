import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'RatingType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    stars: {
      type: GraphQLNonNull(GraphQLInt),
    },
    comment: {
      type: GraphQLString,
    },
    anonymous: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    user_id: {
      type: GraphQLNonNull(GraphQLString),
    },
    service_id: {
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
