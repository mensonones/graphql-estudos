import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Person {
        id: Int
        name: String
        gender: String
        planet: String
    }
    type Query {
        allPeople: [Person]
        person(id: Int!): Person
    }
`;

export default typeDefs;