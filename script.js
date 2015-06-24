$(document).ready(function(){
    $("#slider>img#1").fadeIn(300);
    startSlide();

    $("#slider").hover(function(){
    	stopSlide();
    },function(){
    	startSlide();
    });

});

slideNext = 2;
slideInt = 1;
	

function startSlide() {
	count = $("#slider>img").size();
	loop = setInterval(function(){

		if(slideNext>count){
			slideNext = 1;
		}

		$("#slider>img").fadeOut(300);
		$("#slider>img#"+slideNext).fadeIn(300);

		slideInt = slideNext;
		slideNext = slideNext+1; 

	},2000);
}

function next(){
	newSlide = slideInt+1;
	showSlide(newSlide);

}

function prev(){
	newSlide = slideInt-1;
	showSlide(newSlide);
	

}

function showSlide(id) {
		stopSlide();
		if(id>count){
			id = 1;
		}else if(id<1){
			id=count;
		}

		$("#slider>img").fadeOut(300);
		$("#slider>img#"+id).fadeIn(300);

		slideInt = id;
		slideNext = id+1;
		startSlide();
}

function stopSlide(){
	window.clearInterval(loop);
}