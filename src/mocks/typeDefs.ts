/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:38:30
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-05-09 21:27:55
 * @FilePath: /lulab_graphql_mock/src/mocks/typeDefs.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */



module.exports = `#graphql
type Query {
  hello: String
  resolved: String
  user: Person
  test:Test
}

type Mutation {
  hello: String
  test: String
}


type Person {
  name: String
  age: Int
}

type Test {
  test1: String
  test2: Int
  test3: Int
}

`;;
