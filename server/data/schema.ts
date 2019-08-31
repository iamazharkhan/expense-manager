import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Amount {
    value: String!
    currency: String!
  }

  type User {
    first: String!
    last: String!
    email: String!
  }

  type Receipt {
    id: ID!
    url: String!
  }

  type Expense {
    id: ID!
    amount: Amount!
    date: String!
    merchant: String!
    receipts: [Receipt]!
    comment: String
    category: String
    user: User!
  }

  type AllExpensesResponse {
    data: [Expense]!
    total: Int
  }

  type Query {
    expenses(limit: Int, offset: Int): AllExpensesResponse!
    expense(id: ID!): Expense
  }

  type Mutation {
    updateExpense(id: ID!, comment: String, receiptUrls: String): Expense!
  }
`
