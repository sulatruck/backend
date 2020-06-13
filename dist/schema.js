"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var rootQuery_1 = __importDefault(require("./modules/rootQuery"));
var rootMutation_1 = __importDefault(require("./modules/rootMutation"));
exports.default = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'RootQueryType',
        fields: __assign({}, rootQuery_1.default),
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: 'RootMutationType',
        fields: __assign({}, rootMutation_1.default),
    }),
});
