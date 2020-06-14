import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';

import VoteType from './VoteType';
import { getVotes, saveVote } from './VoteLoader';

export const queries = {
  getVotes: {
    type: GraphQLList(VoteType),
    resolve: getVotes,
  },
};

export const mutations = {
  saveVote: {
    type: VoteType,
    resolve: saveVote,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'VoteInput',
          fields: {
            feedback_id: {
              type: GraphQLString,
            },
            rating_id: {
              type: GraphQLString,
            },
            user_id: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
  },
};
