const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  /**
   * When using docker we don't use the regular hostname or url. Instead,
   * we can use the name of the docker image. In this case, `redis-server` as
   * defined in the docker-compose.yml file. The Redis client makes a good faith
   * effort to connect to a host named `redis-server`, docker will redirect
   * when it sees the hostname that matches the container specified with a
   * matching name and connect the two.
   */
  host: 'redis-server',
  port: 6379, // default redis port
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
