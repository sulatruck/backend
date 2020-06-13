"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = exports.queries = void 0;
var graphql_1 = require("graphql");
var UserType_1 = __importDefault(require("./UserType"));
var UserLoader_1 = require("./UserLoader");
exports.queries = {
    getUsers: {
        type: graphql_1.GraphQLList(UserType_1.default),
        resolve: UserLoader_1.getUsers,
    },
};
exports.mutations = {
    saveUser: {
        type: UserType_1.default,
        resolve: UserLoader_1.saveUser,
        args: {
            input: {
                type: new graphql_1.GraphQLInputObjectType({
                    name: 'CommentInput',
                    fields: {
                        name: {
                            type: graphql_1.GraphQLString,
                        },
                        email: {
                            type: graphql_1.GraphQLString,
                        },
                        password: {
                            type: graphql_1.GraphQLString,
                        },
                    },
                }),
            },
        },
    },
};
