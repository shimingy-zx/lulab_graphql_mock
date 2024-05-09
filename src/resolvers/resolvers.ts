/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:39:19
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-05-08 21:47:27
 * @FilePath: /lulab_graphql_mock/src/schema/resolvers.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


// 该文件用于业务层获取的数据，编辑
module.exports = {
    Query: {
        hello: () => 'Hello, World!',
    },
    Mutation: { hello: () => 'Hello, World!', }
};
