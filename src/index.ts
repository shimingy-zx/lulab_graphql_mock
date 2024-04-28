/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-26 16:29:25
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-04-28 17:09:55
 * @FilePath: /lulab_graphql_mock/src/index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */



const startApolloServer = require('./servers/apolloServer');
const startExpressServer = require('./servers/expressServer');
const startYogaServer = require('./servers/yogaServer');

startApolloServer();
startExpressServer();
startYogaServer();




// const { ApolloServer } = require('@apollo/server');
// const { startStandaloneServer } = require('@apollo/server/standalone');
// const { createServer } = require('node:http');
// const { createYoga } = require('graphql-yoga');
// const { createHandler } = require('graphql-http/lib/use/express')
// const { addMocksToSchema } = require('@graphql-tools/mock');
// const { makeExecutableSchema } = require('@graphql-tools/schema');
// const express = require('express')
// const expressPlayground = require('graphql-playground-middleware-express')
//     .default


// const app = express()




// const typeDefs = `#graphql
//   type Query {
//     hello: String
//     resolved: String
//     user:Person
//   }

//   type Person {
//     name: String
//     age: Int
// }

// `;

// const resolvers = {
//     Query: {
//         resolved: () => 'Resolved',
//         hello: () => 'Hello, World!',
//     },
// };

// const mocks = {
//     Int: () => 6,
//     Float: () => 22.1,
//     String: () => 'Hello',

//     Person: () => ({
//         name: "John",
//         age: () => 3,
//     })
// };



// const schema = addMocksToSchema({
//     schema: makeExecutableSchema({ typeDefs, resolvers }),
//     mocks,
// });



// const apollo_server = new ApolloServer({
//     schema
// });


// const graphql_url = '/graphql'

// app.all(graphql_url, createHandler({ schema }));
// app.get('/playground', expressPlayground({ endpoint: graphql_url }))
// app.listen(3000)
// console.log(`ApolloServer listening at: http://localhost:3000/playground`);


// async function startServers() {
//     const apollo_server = new ApolloServer({ schema });
//     const { url } = await startStandaloneServer(apollo_server, { listen: { port: 4000 } });
//     console.log(`ApolloServer listening at: ${url}`);
// }

// startServers();




// const yoga = createYoga({
//     schema
// })

// const yoga_server = createServer(yoga)

// yoga_server.listen(4001, () => {
//     console.info('Yoga_server is running on http://localhost:4001/graphql')
// })


