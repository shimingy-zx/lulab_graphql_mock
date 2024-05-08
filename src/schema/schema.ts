/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:40:04
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-05-08 21:35:46
 * @FilePath: /lulab_graphql_mock/src/schema/schema.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

const fs = require('fs');
const path = require('path');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { addMocksToSchema } = require('@graphql-tools/mock');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mocks = require('../mocks/index');


module.exports = addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
});

