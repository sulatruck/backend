"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("./schema"));
var server = new apollo_server_1.ApolloServer({
    schema: schema_1.default,
    playground: process.env.NODE_ENV === 'development',
});
exports.default = server;
