export default `type Place {
  _id: ID!
  owner: User
  desciption: String
  mainPhoto: String
  photos: [String]
  priceByNight: Float
  reviews: [Review]
}

input inputPlaceType {
  type: String
  desciption: String
  mainPhoto: String
  photos: [String]
  priceByNight: Float
}

type Mutation {
  addPlace(body: inputPlaceType): Place
}

type Query {
  placeList: [Place]
  place(_id: ID): Place
}
 type Review {
  _id: ID!
  author: User
  feedback: String
  rate: Float
  place: ID
}

type Query {
  reviewByUser(_id: ID): [Review]
}

input inputReviewType {
  _id: ID
  feedback: String
  rate: Float
  place: ID
}

type Mutation {
  addReview(body: inputReviewType): Review
}
 type User {
  _id: ID!
  name: String
  email: String
  photo: String
}

input inputUserType {
  name: String
  email: String
}

type Query {
  userList: [User]
  user(_id: ID): User
}

type Mutation {
  addUser(body: inputUserType): User
}
`;