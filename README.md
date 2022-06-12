# Engineering Company App Backend
This is a prospected web application for any company that does engineering activities.

This project uses: 
- graphql
- express
- express-graphql
- javaScript
- MongoDB
- Mongoose ODM

## Environment Variables
In your `.env `  include the following
1. mongodb uri i.e **MONGO_URI**
2. NODE_ENV which is mostly going to be development
3. PORT

## Testing your GraphQL api

1. Clone this repo to your PC
2. Run the development server with 
```bash
npm run dev
```
## Test data

To test the graphql api go to your browser e.g google chrome, go to this link **http://localhost:PORT/graphiql**. Note that `PORT` is the port you set in your .env**.

**Examples on how you can test the api e.g add User**
```
mutation {
  addUser(firstName: "Christine", lastName: "Mutoni", email: "mutoni@gmail.com", password: "holdon0006") {
    id
    firstName
    lastName
  }
}
```
