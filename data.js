// const data = {
//    fetch('https://randomuser.me/api')
//    .then(function(response) {
//       return response.json();
//    })
//    .then(function(myJson) {
//       console.log(JSON.stringify(myJson));
//    });
// }
const personName = data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last;
document.querySelector("#person_name").innerText=personName;

const personImage = data.results[0].picture.large;
document.querySelector("#face").setAttribute("src",personImage);