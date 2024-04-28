/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:41:56
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-04-28 17:12:21
 * @FilePath: /lulab_graphql_mock/src/servers/yogaServer.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

const { createServer } = require('node:http');
const { createYoga } = require('graphql-yoga');
const schema3 = require('../schema/schema');

function syogaServer() {
    const yoga = createYoga({ schema: schema3 });
    const server = createServer(yoga);
    server.listen(4001, () => {
        console.info('Yoga server is running at: http://localhost:4001/graphql');
    });
}

module.exports = syogaServer;

