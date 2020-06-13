import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLBoolean,
} from 'graphql';

import FeedbackType from './FeedbackType';
import { getFeedback, saveFeedback } from './FeedbackLoader';

export const queries = {
  getFeedback: {
    type: GraphQLList(FeedbackType),
    resolve: getFeedback,
  },
};

export const mutations = {
  saveFeedback: {
    type: FeedbackType,
    resolve: saveFeedback,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'FeedbackInput',
          fields: {
            subject: {
              type: GraphQLString,
            },
            body: {
              type: GraphQLString,
            },
            rating: {
              type: GraphQLBoolean,
            },
            anonymous: {
              type: GraphQLBoolean,
            },
            author_id: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
  },
};
