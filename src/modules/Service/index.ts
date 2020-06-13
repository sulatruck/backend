import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLFloat,
} from 'graphql';

import ServiceType from './ServiceType';
import { getService, saveService } from './ServiceLoader';

export const queries = {
  getService: {
    type: GraphQLList(ServiceType),
    resolve: getService,
  },
};

export const mutations = {
  saveService: {
    type: ServiceType,
    resolve: saveService,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'ServiceInput',
          fields: {
            name: {
              type: GraphQLString,
            },
            address: {
              type: GraphQLString,
            },
            latitude: {
              type: GraphQLFloat,
            },
            longitude: {
              type: GraphQLFloat,
            },
          },
        }),
      },
    },
  },
};
