const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/results', (req, res) => {
  const myHeaders = new Headers();
myHeaders.append("apikey", "hq1hN3hByEK42nstZPzie1JF1gL4OOij");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/spotify/track_lyrics?id=02Zkkf2zMkwRGQjZ7T4p8f%3Fsi%3D2701965f68674b77", requestOptions)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => console.log)

});

app.listen(3000, () => console.log('Listening on port 3000...'));