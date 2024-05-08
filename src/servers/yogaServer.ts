/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:41:56
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-05-08 21:41:34
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
    const port = 4001
    server.listen(port, () => {
        console.info(`Yoga server is running at: http://localhost:${port}/graphql`);
    });
}

module.exports = syogaServer;

