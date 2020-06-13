"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var graphql_iso_date_1 = require("graphql-iso-date");
exports.default = new graphql_1.GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        name: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        email: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        password: {
            type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        created_at: {
            type: graphql_1.GraphQLNonNull(graphql_iso_date_1.GraphQLDateTime),
        },
        updated_at: {
            type: graphql_1.GraphQLNonNull(graphql_iso_date_1.GraphQLDateTime),
        },
    },
});
