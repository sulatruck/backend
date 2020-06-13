import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLBoolean,
} from 'graphql';

import RatingType from './RatingType';
import { getRating, saveRating } from './RatingLoader';

export const queries = {
  getRating: {
    type: GraphQLList(RatingType),
    resolve: getRating,
  },
};

export const mutations = {
  saveRating: {
    type: RatingType,
    resolve: saveRating,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'RatingInput',
          fields: {
            value: {
              type: GraphQLBoolean,
            },
            comment: {
              type: GraphQLString,
            },
            anonymous: {
              type: GraphQLBoolean,
            },
            user_id: {
              type: GraphQLString,
            },
            service_id: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
  },
};
