var myHeaders = new Headers();
myHeaders.append("apikey", "psQ2KPy3GVewXkg0NsOQ8EYuEs7BdPox");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const api_url = "https://api.apilayer.com/spotify/artists?ids=0YC192cP3KPCRWx8zr8MfZ"



async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, requestOptions);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    
    show(data);
}
getapi(api_url);
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
    `<tr>
          <th>Name</th>
          <th>Followers</th>
          <th>Popularity</th>
          <th>Type</th>
         </tr>`;
         tab += `<tr> 
         <td>${data.artists[0].name} </td>
         <td>${data.artists[0].followers.total}</td>
         <td>${data.artists[0].popularity}</td> 
         <td>${data.artists[0].type}</td>          
     </tr>`;
    // Setting innerHTML as tab variable
    document.getElementById("name").innerHTML = tab;
}