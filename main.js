let requestURL = 'https://api.github.com/users/fcfidel';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var githubInfo = request.response;
  populateHeader(githubInfo);
  //showGithubInfo(githubInfo);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');

  //myH1.textContent = jsonObj['login'];
  //myH1.textContent = `<img src="${jsonObj['avatar_url']}" />`;
  //image.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Name: ' + jsonObj['name'] + ' // Formed: ' + jsonObj['created_at'];
  image.appendChild(myPara);
  
  document.querySelector('#my-image').src = jsonObj['avatar_url'];
}