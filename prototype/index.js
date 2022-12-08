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


const api_url = "https://api.apilayer.com/spotify/artists?ids=0YC192cP3KPCRWx8zr8MfZ"



async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, requestOptions);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    
    show(data);
}

function show(data){
    const tab = [];
    for(let i = 0; i<2; i++){
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
    }
    Table1 = tab[0]
    Table2 = tab[1]
    document.getElementById("option1").innerHTML = Table1;
    document.getElementById("option2").innerHTML = Table2;
}

//https://v1.nocodeapi.com/kiryn/spotify/puFGJfMsgiBixtEE/search?q=%r&type=artist&perPage=2
function startGame(){
    const api_call = "https://v1.nocodeapi.com/kiryn/spotify/puFGJfMsgiBixtEE/search?q=" + generateRandomSearch() + "&type=artist&perPage=2";
    getapi(api_call);
    
}