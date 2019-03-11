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
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;
		
        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'Images/Digi Internal Images/'+ fileName+'/Fullscreen/ImagesRenamed/Img' + i + '.jpg';
		img.smallsrc = 'Images/Digi Internal Images/'+ fileName +'/Thumbnails/ImagesRenamed/img' + i + '.jpg';

    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
	
	
var code = '<a href="'+ img.src +'" style="width:82px;height:125px;"><img src="'+ img.smallsrc +'" width="82px" height="125"></a>'
	
	div.insertAdjacentHTML('beforeend', code)
//	div.appendChild(img)
	
}

function fDoesntExist() {
    bFinishCheck = true;
}