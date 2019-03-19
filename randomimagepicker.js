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
	console.log("loop number" + num)
  var div = document.getElementById('images');

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;



//var myInterval = setInterval(loadImage, 1);
	
loadImage(num);
	
console.log("endingloop")

}
function loadImage() {
	console.log(num)
	var loop = true;
	while (loop) {
	
    if (bFinishCheck) {
        clearInterval(myInterval);
        bFinishCheck = false;
		console.log("Finished check")
		loop = false;
		return;
    }

    if (bCheckEnabled) {
		console.log("Check Enabled")
        bCheckEnabled = false;
		
        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'Images/Digi Internal Images/'+ fileName[num]+'/Fullscreen/ImagesRenamed/img' + i + '.png';
		loop = false;
    }
	}

}

function fExists() {
	console.log("Image exists")
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
	
	
	var code = '<img src="'+ img.src +'"height="100px">'
	
	div.insertAdjacentHTML('beforeend', code)
	console.log("loading" + num)
	console.log(img.src)

	
}

function fDoesntExist() {
    bFinishCheck = true;
	console.log("failed")
}

