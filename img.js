//var img = new Image();
//var div = document.getElementById('lol');
// 
//img.onload = function() {
//  div.appendChild(img);
//};
// 
//img.src = '8bike.jpg' 

var div = document.getElementById('Advertising');

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;




var myInterval = setInterval(loadImage, 1);

function loadImage() {

    if (bFinishCheck) {
        clearInterval(myInterval);
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;

        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'Images/Digi Internal Images/Advertising/Fullscreen/ImagesRenamed/Img' + i + '.jpg';

    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
	
	
var code = '<a href="'+ img.src +'" style="width:82px;height:125px;"><img src="'+ img.src +'" width="82px" height="125"></a>'
	
	div.insertAdjacentHTML('beforeend', code)
//	div.appendChild(img)
	
}

function fDoesntExist() {
    bFinishCheck = true;
}