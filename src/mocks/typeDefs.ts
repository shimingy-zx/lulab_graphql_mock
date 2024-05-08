/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-28 16:38:30
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-05-08 21:26:29
 * @FilePath: /lulab_graphql_mock/src/schema/typeDefs.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */



module.exports = `#graphql
type Query {
  hello: String
  resolved: String
  user: Person
}

type Mutation {
  hello: String
  test: String
}


type Person {
  name: String
  age: Int
}
`;;
