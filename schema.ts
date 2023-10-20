const { gql } = require('apollo-server');

const typeDefs = gql`

type Mahasiswa  {
  id: ID!
  nama: String
  nim: String
}

type KHS {
  id: ID!
  mahasiswa: Mahasiswa
  nilai: Int
}

type Jurusan {
  id: ID!
  nama: String
}

type Query {
  getMahasiswa(id: ID!): Mahasiswa
  getKhs(id: ID!): KHS
  getJurusan(id: ID!): Jurusan
  mahasiswa: [Mahasiswa]
  khs: [KHS]
  jurusan: [Jurusan]
}

`;

export {
  typeDefs
}
