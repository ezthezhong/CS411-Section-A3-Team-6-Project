import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {


  const CLIENT_ID = "3a6379d1417b4ff3af48dfe94c5419c6"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

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
        randomSearch = '%' + randomCharacter;
    }
    return randomSearch;
  }

  const api_url = "https://api.apilayer.com/spotify/artists?ids=0YC192cP3KPCRWx8zr8MfZ"

  var myHeaders = new Headers();

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, requestOptions);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    show(data);
}

  function show(data) {
    const tab = [];
    for (let i = 0; i< 2; i++) {
      tab[i] = 
      `<tr>
      <th>Name</th>
      <th>Followers</th>
      <th>Popularity</th>
      <th>Type</th>
      </tr>`;
      tab[i] += `<tr>
      <td>${data.artists.items[i].name} </td>
      <td>${data.artists.items[i].followers.total}</td>
      <td>${data.artists.items[i].popularity}</td> 
      <td>${data.artists.items[i].type}</td>
      </tr>`;
      // const six = tab[0];
    }
    const six = document.getElementById("option1").innerHTML = tab[0];
    const seven = document.getElementById("option2").innerHTML = tab[1];
  }
  function startGame() {
    const api_call = "https://v1.nocodeapi.com/kiryn/spotify/puFGJfMsgiBixtEE/search?q=" + generateRandomSearch() + "&type=artist&perPage=2";
    document.getElementById("option2").innerHTML = (getapi(api_call));
    document.getElementById("option1").innerHTML = (getapi(api_call));
  }

  return ( 
    startGame()
  )
}

export default App;
