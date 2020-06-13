import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';

import UserType from './UserType';
import { getUsers, saveUser } from './UserLoader';

export const queries = {
  getUsers: {
    type: GraphQLList(UserType),
    resolve: getUsers,
  },
};

export const mutations = {
  saveUser: {
    type: UserType,
    resolve: saveUser,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'UserInput',
          fields: {
            name: {
              type: GraphQLString,
            },
            email: {
              type: GraphQLString,
            },
            password: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
  },
};
