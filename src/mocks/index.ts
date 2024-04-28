/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:40:04
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-04-28 17:06:43
 * @FilePath: /lulab_graphql_mock/src/mocks/index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const mocks_v = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => 'Hello',
    Person: () => ({
        name: "John",
        age: () => 3,
    })
};

module.exports = mocks_v;
