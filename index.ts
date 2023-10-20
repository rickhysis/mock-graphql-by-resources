import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { jurusanData, khsData, mahasiswaData } from './mockData';

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      getMahasiswa: (parent, args) => {
        return mahasiswaData.find((mahasiswa) => mahasiswa.id === args.id);
      },
      getKhs: (parent, args) => {
        return khsData.find((khs) => khs.id === args.id);
      },
      getJurusan: (parent, args) => {
        return jurusanData.find((jurusan) => jurusan.id === args.id);
      },
      mahasiswa: (parent, args) => {
        return mahasiswaData;
      },
      khs: (parent, args) => {
        return khsData;
      },
      jurusan: (parent, args) => {
        return jurusanData;
      },
    },
  },
});

async function startServer() {
  await server.start();

  app.post('/v1/:resource', async (req, res) => {
    const resource = req.params.resource; // ['mahasiswa', 'khs', 'jurusan']
    const query = req.body.query; // { id, nama, nim } base on resources

    const response = await server.executeOperation({
      query: `query Query { ${resource} ${query} }`
    });

    res.send(JSON.stringify(response.data));
  });

  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(port, () => {
    console.log(`Server is running at`);
  });
}

startServer();