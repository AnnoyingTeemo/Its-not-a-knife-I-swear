//var img = new Image();
//var div = document.getElementById('lol');
// 
//img.onload = function() {
//  div.appendChild(img);
//};
// 
//img.src = '8bike.jpg' 

var fileName = ["Advertising", "Books and Magazines", "Editorial", "Linework", "More", "Portraiture", "Storyboards and visuals"];


var num= 0;
for (num = 0; num < fileName.length; num++) 
{
  var div = document.getElementById('images');

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;



var myInterval = setInterval(loadImage, 1);


}
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
        img.src = 'Images/Digi Internal Images/'+ fileName[num]+'/Fullscreen/ImagesRenamed/img' + i + '.jpg';
    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
	
//saving old style stuff style="width:82px;height:125px;"	
var code = '<img src="'+ img.src +'"height="100px">'
	
	div.insertAdjacentHTML('beforeend', code)
	console.log(num)
//	div.appendChild(img)
	
}

function fDoesntExist() {
    bFinishCheck = true;
	console.log("failed")
}

