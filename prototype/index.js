var myHeaders = new Headers();
myHeaders.append("apikey", "psQ2KPy3GVewXkg0NsOQ8EYuEs7BdPox");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
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
  var followers = new Array();
  var score = 0
  var followersLeft = 0;
  var followersRight = 0;
  
  var data;
  async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, requestOptions);
    
    // Storing data in form of JSON
    data = await response.json();
    console.log(data);

    show(data);
}
// getapi for a single one
async function getapiSingleLeft(url) {
    
    // Storing response
    const response = await fetch(url, requestOptions);
    
    // Storing data in form of JSON
    data = await response.json();
    console.log(data);

    showSingleLeft(data);
}

async function getapiSingleRight(url) {
    
    // Storing response
    const response = await fetch(url, requestOptions);
    
    // Storing data in form of JSON
    data = await response.json();
    console.log(data);

    showSingleRight(data);
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
      
      followers.push(data.artists.items[i].followers.total);
    }
    followersLeft = followers[0];
    followersRight = followers[1];
    const six = document.getElementById("option1").innerHTML = tab[0];
    const seven = document.getElementById("option2").innerHTML = tab[1];
  }

  function showSingleLeft(data) {
    const tab = [];
      tab[0] = 
      `<tr>
      </tr>`;
      tab[0] += `<tr>
      <td>${data.artists.items[0].name} </td>
      </tr>`;
      // const six = tab[0];
      
      followersRight = data.artists.items[0].followers.total;
      console.log(followersLeft);
      console.log(followersRight);
    const six = document.getElementById("option2").innerHTML = tab[0];
    
  }

  function showSingleRight(data) {
    const tab = [];
      tab[0] = 
      `<tr>
      </tr>`;
      tab[0] += `<tr>
      <td>${data.artists.items[0].name} </td>
      </tr>`;
      // const six = tab[0];
      
      followersLeft = data.artists.items[0].followers.total;
      console.log(followersLeft);
      console.log(followersRight);
    const seven = document.getElementById("option1").innerHTML = tab[0];
  }


  // https://v1.nocodeapi.com/dbuildster/spotify/cWNDcmiNimyBqRqw

  function startGame() {
    const api_call = "https://v1.nocodeapi.com/dbuildster/spotify/cWNDcmiNimyBqRqw/search?q=" + generateRandomSearch() + "&type=artist&perPage=2";
    document.getElementById("option1").innerHTML = (getapi(api_call));
    document.getElementById("option2").innerHTML = (getapi(api_call));
    followersLeft = followers[0];
    followersRight = followers[1];
   
  }

  
  function isLeftCorrect(){
    
    if(followersLeft > followersRight){
        console.log(followersLeft);
        console.log(followersRight);
      document.getElementById("score").innerHTML = score+=1;
      const api_call = "https://v1.nocodeapi.com/dbuildster/spotify/cWNDcmiNimyBqRqw/search?q=" + generateRandomSearch() + "&type=artist&perPage=1";
      console.log(data);
      document.getElementById("option2").innerHTML = (getapiSingleLeft(api_call));
    }
  }

  function isRightCorrect(){
    
      if(followersRight > followersLeft){
        console.log(followersLeft);
      console.log(followersRight);
        document.getElementById("score").innerHTML = score+=1;
        const api_call = "https://v1.nocodeapi.com/dbuildster/spotify/cWNDcmiNimyBqRqw/search?q=" + generateRandomSearch() + "&type=artist&perPage=1";
        document.getElementById("option1").innerHTML = (getapiSingleRight(api_call));
      }
    
  }
