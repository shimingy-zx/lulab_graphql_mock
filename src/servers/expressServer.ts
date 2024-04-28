/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:41:38
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-04-28 17:11:38
 * @FilePath: /lulab_graphql_mock/src/servers/expressServer.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const { createHandler } = require('graphql-http/lib/use/express');
const schema2 = require('../schema/schema');

const graphql_url = '/graphql';
const port = 4003;

function expressServer() {
    const app = express();
    app.all(graphql_url, createHandler({ schema: schema2 }));
    app.get('/playground', expressPlayground({ endpoint: graphql_url }));
    app.listen(port);
    console.log(`Express graphql playground listening at: http://localhost:${port}/playground`);
}

module.exports = expressServer;

