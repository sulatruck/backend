import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'ServiceType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLNonNull(GraphQLString),
    },
    average_rating: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    latitude: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    longitude: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    created_at: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updated_at: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  },
});
