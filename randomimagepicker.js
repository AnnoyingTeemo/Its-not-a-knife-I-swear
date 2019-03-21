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
//        clearInterval(myInterval);
        bFinishCheck = false;
		console.log("Finished check")
		loop = false;
		return;
    }

    if (bCheckEnabled) {
		console.log("Check Enabled")
        bCheckEnabled = false;
		var Exists = false;
		var Error = false;
		
        img = new Image();
		//the problem is here
        //img.onload = fExists;
		//Its forgetting what num its on
        img.onload, Exists = true;
		
		img.onerror, Error = true;
//		img.onerror = fDoesntExist;
        img.src = 'Images/Digi Internal Images/'+ fileName[num]+'/Fullscreen/ImagesRenamed/img (' + i + ').jpg';
//		loop = false;//remove this later
		
		if (Exists = true){
			console.log("exists")
			fExists(img.src);
		}
		if (Error = true){
			console.log("Error")
			fDoesntExist()
		}
    }
	}

}

function fExists() {
	console.log("Image exists")
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
	
	
	var code = '<img src="'+ img.src +'"height="100px">  '
	
	div.insertAdjacentHTML('beforeend', code)
	console.log("loading" + num)
	console.log(img.src)

	
}

function fDoesntExist() {
    bFinishCheck = true;
	console.log("failed")
}

