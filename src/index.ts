/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-26 16:29:25
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-04-28 15:16:35
 * @FilePath: /lulab_graphql_mock/src/index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */



import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';



const typeDefs = `#graphql
  type Query {
    hello: String
    resolved: String
    user:Person
  }

  type Person {
    name: String
    age: Int
}

`;

const resolvers = {
    Query: {
        resolved: () => 'Resolved',
        hello: () => 'Hello, World!',
    },
};

const mocks = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => 'Hello',

    Person: () => ({
        name: "John",
        age: () => 3,
    })
};



const schema = addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
});



const apollo_server = new ApolloServer({
    schema
});

const { url } = await startStandaloneServer(apollo_server, { listen: { port: 4000 } });

console.log(`ApolloServer listening at: ${url}`);



// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
    schema
})

// Pass it into a server to hook into request handlers.
const yoga_server = createServer(yoga)

// Start the server and you're done!
yoga_server.listen(4001, () => {
    console.info('Yoga_server is running on http://localhost:4001/graphql')
})


