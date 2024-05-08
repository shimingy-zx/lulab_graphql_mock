/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-26 16:29:25
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-04-29 18:09:08
 * @FilePath: /lulab_graphql_mock/src/index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */



// const startApolloServer = require('./servers/apolloServer');
// const startExpressServer = require('./servers/expressServer');
// const startYogaServer = require('./servers/yogaServer');

// startApolloServer();
// startExpressServer();
// startYogaServer();


const { createServer } = require('node:http');
const { createSchema, createYoga } = require('graphql-yoga');
const { useSofa } = require('@graphql-yoga/plugin-sofa');

const books = [
    { id: 1, title: 'Book A', type: 'AUDIO' },
    { id: 2, title: 'Book B', type: 'LEGACY' }
]
const users = [
    {
        id: 1,
        name: 'User A',
        favoriteBook: books[0],
        shelf: books
    },
    {
        id: 2,
        name: 'User B',
        favoriteBook: books[1],
        shelf: books
    }
]

const UsersCollection = {
    get(id: string | number) {
        const uid = typeof id === 'string' ? parseInt(id, 10) : id

        return users.find(u => u.id === uid)
    },
    all() {
        return users
    }
}

const BooksCollection = {
    get(id: string | number) {
        const bid = typeof id === 'string' ? parseInt(id, 10) : id

        return books.find(u => u.id === bid)
    },
    all() {
        return books
    },
    add(title: string) {
        const book = {
            id: parseInt(Math.random().toString(10).substr(2), 10),
            title,
            type: 'LEGACY'
        }

        books.push(book)

        return book
    }
}

const schema = createSchema({
    typeDefs: /* GraphQL */ `
    type Book {
      id: ID!
      title: String!
      type: BookType!
    }
 
    enum BookType {
      AUDIO
      LEGACY
    }
 
    type User {
      id: ID!
      name: String!
      favoriteBook: Book!
      shelf: [Book!]!
    }
 
    type Query {
      user(id: ID!): User
      users: [User!]
      book(id: ID!): Book
      books: [Book!]
    }
 
    type Mutation {
      addBook(title: String!): Book
    }
 
    schema {
      query: Query
      mutation: Mutation
    }
  `,
    resolvers: {
        Query: {
            user(_: any, { id }: any) {
                return UsersCollection.get(id)
            },
            users() {
                return UsersCollection.all()
            },
            book(_: any, { id }: any) {
                return BooksCollection.get(id)
            },
            books() {
                return BooksCollection.all()
            }
        },
        Mutation: {
            addBook(_: any, { title }: any) {
                const book = BooksCollection.add(title)
                return book
            }
        }
    }
})

const yoga = createYoga({
    schema,
    plugins: [
        useSofa({
            basePath: '/rest',
            swaggerUI: {
                endpoint: '/swagger',
            },
            title: 'Example API',
            version: '1.0.0',
        })
    ]
})

const server = createServer(yoga)

server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
})

