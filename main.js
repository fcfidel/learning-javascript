/**
 * Created by fidelcastro on 5/26/17.
 */

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

    myH1.textContent = jsonObj['login'];
    image.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Name: ' + jsonObj['name'] + ' // Formed: ' + jsonObj['created_at'];
   image.appendChild(myPara);
}
