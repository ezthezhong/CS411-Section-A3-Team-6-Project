import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

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
      </tr>`;
      tab[i] += `<tr>
      <td>${data.artists.items[i].name} </td>
      </tr>`;
      // const six = tab[0];
    }
    const six = document.getElementById("option1").innerHTML = tab[0];
    const seven = document.getElementById("option2").innerHTML = tab[1];
  }
  function startGame() {
    const api_call = "https://v1.nocodeapi.com/kirynmissy/spotify/AwQbQHZlDSCGWmtd/search?q=" + generateRandomSearch() + "&type=artist&perPage=2";
    document.getElementById("option2").innerHTML = (getapi(api_call));
    document.getElementById("option1").innerHTML = (getapi(api_call));
  }

  return ( 
    startGame()
  )
}

export default App;
