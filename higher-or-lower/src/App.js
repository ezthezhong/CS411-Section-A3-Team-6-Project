import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
function App() {

  const CLIENT_ID = "+++++++++++++++++++++++++++++"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateRandomSearch() {
  const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length))
  let randomSearch = '';
  
  switch (Math.round(Math.random())) {
    case 0:
      randomSearch = randomCharacter + '%';
      break;
    case 1:
      randomSearch = '%' + randomCharacter + '%';
      break;
    default:
      randomSearch = '%' + randomCharacter
  }
  return randomSearch;
}

  const [token, setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }
  const searchKey = generateRandomSearch()
  const [artists, setArtists] = useState([])
  async function searchArtists(e) {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    });

    setArtists(data.artists.items);
    const renderArtists = () => {
      return artists.map(artist => (
          <div key={artist.id}>
              {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
              {artist.name}
          </div>
      ))
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Spotify React</h1>
          {!token ?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
              to Spotify</a>
            : <button onClick={logout}>Logout</button>}
            {renderArtists()}
        </header>
      </div>
    );
  }
}
export default App;
