



const { makeExecutableSchema } = require('@graphql-tools/schema');
const { addMocksToSchema } = require('@graphql-tools/mock');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mocks = require('../mocks/index');




const schema = addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
});

module.exports = schema;
