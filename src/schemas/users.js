const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList } = require('graphql');

// Models
const User = require('../../models/User');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'UserQueryType',
  fields: {
    // All users
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) => {
        return User.find();
      }
    },
    // One user
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: (parent, args) => {
        return User.findById(args.id);
      }
    }
  }
});

// mutations
const mutation = new GraphQLObjectType({
  name: 'UserMutationType',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        const user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password
        });
        return user.save();
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return User.findByIdAndUpdate(args.id, {
          firstName: args.firstName,
          lastName: args.lastName
        }, { new: true });
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: (parent, args) => {
        return User.findByIdAndRemove(args.id);
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});