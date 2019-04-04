//var img = new Image();
//var div = document.getElementById('lol');
// 
//img.onload = function() {
//  div.appendChild(img);
//};
// 
//img.src = '8bike.jpg' 

var div = document.getElementById('Images');

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;

var fileName = document.title;


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
        img.src = 'Images/Digi Internal Images/'+ fileName+'/Fullscreen/ImagesRenamed/img (' + i + ').jpg';
		img.smallsrc = 'Images/Digi Internal Images/'+ fileName +'/Thumbnails/ImagesRenamed/img (' + i + ').jpg';

    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
	
//saving old style stuff style="width:82px;height:125px;"	
var code = '<a href="'+ img.src +'" ><img src="'+ img.smallsrc +'" width="82px" height="auto"></a> '

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