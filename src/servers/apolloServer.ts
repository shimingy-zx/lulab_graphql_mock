/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:37:31
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-04-28 17:00:23
 * @FilePath: /lulab_graphql_mock/src/servers/apolloServer.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const schema1 = require('../schema/schema');

async function apolloServer() {
    const server = new ApolloServer({ schema: schema1 });
    const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
    console.log(`ApolloServer listening at: ${url}`);
}

module.exports = apolloServer;

