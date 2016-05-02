$(document).ready(function(){
    $(document).on("contextmenu", function(e){
        if(e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA")
             e.preventDefault();
     });
 });
 
var  $overLay = $('<a href="rave_candy_gallery.html"><div id="overlay"><div class = "phoneContainer"><img class="phoneImage" src="assets/RaveCandy/m8Phone.png"></div></div></a>');
 var $phone = $(' <div class = "phoneContainer"><img class="phoneImage" src="assets/RaveCandy/m8Phone.png"></div>' );
 var $image = $("<img class = 'oImage'>");
 var $rightArrow = $("<img src='assets/RaveCandy/shakeOffBtn.png' class = 'rightArrow'>");
 var $leftArrow = $("<img src='assets/RaveCandy/shakeOnBtn.png' class = 'leftArrow'>");
 var $next =$("img.btnImage");
 
 $overLay.append($image);
 
 $(".btnImage" ).click(function (event) {
 	$("body").append($overLay);
 	$("body").append($rightArrow, $leftArrow);
 	$(".oImage").show();
 	$(".gallery").hide();
 	event.preventDefault();
 	var imageLocation = $(this).attr("src");
 	$image.attr("src", imageLocation);
 	$overLay.show(); 
 	
 	if (window.screen.availWidth > 900) {
 		$(".gallery").show();
 		$rightArrow.show();
 		$leftArrow.show();
 	}
 });
 	
 $($overLay).click(function(noScroll) {
 	$(".gallery").show();
 	$overLay.hide();
 	$rightArrow.hide();
 	$leftArrow.hide();
 	noScroll.preventDefault();	
 });
 
 
$('img.btnImage').on("mouseenter", function() {
    var $img = $(this);
    var src = $img.prop('src');
    if (src.match(/\.png$/)) {
        $img.prop('src', src.replace(/\.png$/, '.gif'));
    }
});

$("img.btnImage").on("mouseleave",function() {
	var $img = $(this);
	var src= $img.prop('src');
	if (src.match(/\.gif$/)) {
		$img.prop('src', src.replace(/\.gif$/, '.png'));
	}
});

function change()	{
   var memory = this.src;
   this.src = this.getAttribute('data-src');
   this.dataset.src = memory;         
}

var pacman = new Audio("assets/RaveCandy/pacman.mp3");
var sound = false;

$("#musicBtn").click(function() {
	if (sound===false) {
		pacman.play();
		sound=true;
	} else {
		pacman.pause();
		sound=false;
	}
});

document.getElementById('musicBtn').onclick =change;
document.getElementById('shakeBtn').onclick =change;



