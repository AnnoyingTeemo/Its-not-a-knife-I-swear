
var div = document.getElementById('Clients');

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;

var fileName = "Clients";


var myInterval = setInterval(loadImage, 1);

function loadImage() {

    if (bFinishCheck) {
        clearInterval(myInterval);
		addFooter();
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;
		
        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'Images/Digi Internal Images/'+ fileName+'/ImagesRenamed/img (' + i + ').jpg';
    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
	
//saving old style stuff style="width:82px;height:125px;"	
var code = '<img src="'+ img.src +'" > '

	div.insertAdjacentHTML('beforeend', code)
//	div.appendChild(img)
	
}

function fDoesntExist() {
    bFinishCheck = true;
}

function addFooter(){
var footerCode = '<div id="footer">\u00A9Copyright 2019 All images and concepts on this site are protected under international copyright laws</div>'

div.insertAdjacentHTML('beforeend', footerCode)
}