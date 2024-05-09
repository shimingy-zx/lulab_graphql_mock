/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:40:04
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-05-09 21:31:48
 * @FilePath: /lulab_graphql_mock/src/mocks/index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

// 参考链接：https://the-guild.dev/graphql/tools/docs/mocking

module.exports = {
    Int: () => 6,
    Float: () => 22.1,
    // String: () => 'Hello',
    test: () => "test",

    Person: () => ({
        name: "John",
        age: () => 3,
    }),

    Test: () => ({
        test1: "fhduisahfap9uisnj",
        test2: () => 3,
        test3: () => 6,
    }),
};;
