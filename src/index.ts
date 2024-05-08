/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-26 16:29:25
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-05-08 21:19:27
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
