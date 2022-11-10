const express = require('express');
const app = express();

const SpotifyAPI = () => {
    const [search, setSearch] = useState(null)

}

app.get('/', (req, res) => {
    res.send('Hello World');
});

const myHeaders = new Headers();
myHeaders.append("apikey", "hq1hN3hByEK42nstZPzie1JF1gL4OOij");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const things = fetch("https://api.apilayer.com/spotify/track_lyrics?id=02Zkkf2zMkwRGQjZ7T4p8f?si=d630212ac8e74fb5", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

