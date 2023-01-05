let number = 0;
let data = []; // Ajout d'une variable pour stocker les données extraites de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {

  // Décrire le processus pour obtenir des données depuis ajax.json
  const request = new XMLHttpRequest();
  request.open ("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
  request.onreadystatechange = function(){
    if (request.readyState==4){
      if (request.status==200){
        data = request.response;
      }
    }
  }
};

function changeVideo() {
  // Décrivez le traitement lorsque le bouton est cliqué
  // Appelez le processus getData uniquement si vous n'avez pas les données d'ajax.json
  if (!data.length)getData();
  button.onclick = function(){
    titleArea.innerHTML= data[index].title;
    contentArea.innerHTML= data[index].content;
    videoArea.setAttribute("src", data[indesx].url);
    index++;
    if (index==data.length) index =0
  };
}

window.onload = changeVideo;