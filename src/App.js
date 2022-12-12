import React, { Component } from "react";
import { AppRouter } from "./AppRouter";

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

var followers = new Array();

function show(data) {
const tab = [];
for (let i = 0; i< 2; i++) {
  tab[i] = 
  <tr>
  </tr>;
  tab[i] += <tr>
  <td>${data.artists.items[i].name} </td>
  </tr>;
  // const six = tab[0];
  followers.push(data.artists.items[i].followers.total);
}
}

const api_call = "https://v1.nocodeapi.com/theifhawk/spotify/cnBRhVmxDYwbcgKY/search?q=" + generateRandomSearch() + "&type=artist&perPage=2";

function startGame(){
  
}
document.getElementById("option1").innerHTML = (getapi(api_call));
document.getElementById("option2").innerHTML = (getapi(api_call));

var score = 0
function isLeftCorrect(){

  if(followers[0] > followers[1]){
    document.getElementById("score").innerHTML = score+=1;
  }
}
function isRightCorrect(){
    if(followers[1] > followers[0]){
      document.getElementById("score").innerHTML = score+=1;
    }

}

class App extends Component {
  
  render() {
    return startGame(), <AppRouter />
  }
}

export default App;
