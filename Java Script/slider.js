var slider_img = document.querySelector('.slide_img');
var slide_img_link = document.querySelector('.slide_link')
var map_name = document.querySelector('.map_name')
var names=['Kanto','Johto','Hoenn','Battle_Frontier','Sinnoh','Unova','Kalos','Alola','Galar']
var images=['KantoMap.png','JohtoMap.png','HoennMap.png','Battle_Frontier_Map.png','SinnohMap.png','UnovaMap.png','KalosMap.png','AlolaMap.png','GalarMap.png'];
var i=0;

function prev(){
    if(i<=0) i =images.length;
    i--;
    return setName(),setImg(),setLink();
}
function next(){
    if(i>=images.length-1) i = -1;
    i++;
    return setName(),setImg(),setLink();
}

function setName(){
    map_name.innerHTML = names[i];
}

function setImg(){
    return slider_img.setAttribute('src','./Images/Maps/'+images[i]);
}

function setLink(){
    return slide_img_link.setAttribute('href','./Images/Maps/'+images[i]);
}





