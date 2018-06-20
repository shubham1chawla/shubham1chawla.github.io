// CONSTANTS
const TOP_BOTTOM_MARGIN_MAIN_RESIZE_ELEMENT_IN_PERCENTAGE = 0.12;
const MAIN_HEIGHT_RESIZE_ELEMENT_IN_PERCENTAGE = 0.76;

const LEFT_RIGHT_MARGIN_MAIN_RESIZE_ELEMENT_IN_PERCENTAGE = 0.15;
const MAIN_WIDTH_RESIZE_ELEMENT_IN_PERCENTAGE = 0.7;

// Getting some variables

var viewport_height = $(window).height();
var viewport_width = $(window).width();
var doc_width = $(document).width();
var doc_height = $(document).height();

var resize_element = document.querySelector('#resize_element');
var highfyLines = document.querySelector('#highfyLines');

var highfyLinesData = [
	{name: "a Full Stack Developer"},
	{name: "a UI/UX Designer"},
	{name: "a Food <i class='fas fa-heart'></i>er"},
	{name: "a proud Indian"},
	{name: "a Freelancer"}
];

window.onload = function(){
	//resizing the div
	setInterval(resize, 1000/60);

	//To change content
	setInterval(changeTagLine, 2000);
};

function resize(){
	var viewport_height = $(window).height();
	var viewport_width = $(window).width();
	var doc_width = $(document).width();
	var doc_height = $(document).height();

	// console.log(doc_width+"|"+doc_height+"|"+viewport_width+"|"+viewport_height);

	//Calculating height from top and total visible area
	var margin_top_bottom = viewport_height*TOP_BOTTOM_MARGIN_MAIN_RESIZE_ELEMENT_IN_PERCENTAGE;
	var div_height = viewport_height*MAIN_HEIGHT_RESIZE_ELEMENT_IN_PERCENTAGE;

	var margin_left_right = viewport_width*LEFT_RIGHT_MARGIN_MAIN_RESIZE_ELEMENT_IN_PERCENTAGE;
	var div_width = viewport_width*MAIN_WIDTH_RESIZE_ELEMENT_IN_PERCENTAGE;

	$("#resize_element").css("height", div_height+"px").css("margin-top", margin_top_bottom+"px").css("margin-bottom", margin_top_bottom+"px");
	$("#home_div").css("height", (div_height-50)+"px");
	$("#inject").css("height", (div_height-50)+"px");
}

var currently_visible_page = "home";
var tab_data = [
	{name: "about", data: "<div class='container-fuild'><h3 class='raleway_font'><i class='fas fa-user-circle'></i> About Me</h3><hr><div class='row raleway_font'><div class='col-md-6'><strong><i class='fas fa-user-graduate'></i> EDUCATION</strong><ul><li>B.E. in Electronics & Communications<br><span style='font-size: 0.8em;'>Thapar Institute of Engineering & Technology<br>2015 - Present</span></li><li>Class XII<br><span style='font-size: 0.8em;'>Modern Public School, Bhiwadi<br>2014 – 2015</span></li><li>Class X<br><span style='font-size: 0.8em;'>Modern Public School, Bhiwadi<br>2012 – 2013</span></li></ul></div><div class='col-md-6'><strong><i class='fas fa-basketball-ball'></i> INTERESTS</strong><ul><li>Technology & Gadgets</li><li>Mentoring Juniors</li><li>Swimming</li><li>Chess</li></ul><strong><i class='fas fa-language'></i> LANGUAGES</strong><ul><li>English<br><p class='text-muted'>Professional</p></li><li>Hindi<br><p class='text-muted'>Native</p></li></ul></div></div></div>"},
	{name: "projects", data: "<div class='container-fuild'><h3 class='raleway_font'>Projects</h3><hr><div class='row raleway_font'><div class='col-md-6'><strong><i class='fas fa-book-open'></i> EDUCATION</strong><ul><li>B.E. in Electronics & Communications<br><span style='font-size: 0.8em;'>Thapar Institute of Engineering & Technology<br>2015 - Present</span></li><li>Class XII<br><span style='font-size: 0.8em;'>Modern Public School, Bhiwadi<br>2014 – 2015</span></li><li>Class X<br><span style='font-size: 0.8em;'>Modern Public School, Bhiwadi<br>2012 – 2013</span></li></ul></div><div class='col-md-6'><strong><i class='fas fa-basketball-ball'></i> INTERESTS</strong><ul><li>Technology & Gadgets</li><li>Mentoring Juniors</li><li>Swimming</li><li>Chess</li></ul><strong><i class='fas fa-language'></i> LANGUAGES</strong><ul><li>English<br><p class='text-muted'>Professional</p></li><li>Hindi<br><p class='text-muted'>Native</p></li></ul></div></div></div>"}
];

function managePage(){
	toggle_slider();
	switch(currently_visible_page){
		case "home":
			$("#inject").html("");
			$("#inject").css("display", "none");
			$("#home_div").css("display", "block");
		break;
		case "about":
			$("#home_div").css("display", "none");
			$("#inject").html(tab_data[0].data);
			$('#inject').css("display", "block");
		break;
		case "projects":
			$("#home_div").css("display", "none");
			$("#inject").html(tab_data[1].data);
			$('#inject').css("display", "block");
		break;
		case "experiences":
			$("#home_div").css("display", "none");
			$("#inject").html("experiences");
		break;
		case "skills":
			$("#home_div").css("display", "none");
			$("#inject").html("skills");
		break;
	}
}

var tagline_num = 0;
function changeTagLine(){
	tagline_num++;
	if(tagline_num >= highfyLinesData.length){
		tagline_num = 0;
	}
	highfyLines.innerHTML = highfyLinesData[tagline_num].name;
}

$("#home").click(function(){
	currently_visible_page = "home";
	managePage();
});

$("#about").click(function(){
	currently_visible_page = "about";
	managePage();
});

$("#projects").click(function(){
	currently_visible_page = "projects";
	managePage();
});

$("#experiences").click(function(){
	currently_visible_page = "experiences";
	managePage();
});

$("#skills").click(function(){
	currently_visible_page = "skills";
	managePage();
});

var slider_toggled = false;
$("a#toggle").click(function(){
	$("#toggle_div").slideToggle();
	$("a#toggle").css("display", "none");
	slider_toggled = true;
	return true;
});

function toggle_slider(){
	$("#toggle_div").slideToggle();
	$("a#toggle").css("display", "block");
	slider_toggled = false;
	return true;
}

$("#resume").hover(function(){
	if(!slider_toggled){
		$("#info").html("PDF Resume");
		$("#info").css("display", "block");
	}
}, function(){
	$("#info").css("display", "none");
	$("#info").html("");
});

$("#facebook").hover(function(){
	if(!slider_toggled){
		$("#info").html("Facebook");
		$("#info").css("display", "block");
	}
}, function(){
	$("#info").css("display", "none");
	$("#info").html("");
});

$("#linkedin").hover(function(){
	if(!slider_toggled){
		$("#info").html("LinkedIn");
		$("#info").css("display", "block");
	}
}, function(){
	$("#info").css("display", "none");
	$("#info").html("");
});

$("#mail").hover(function(){
	if(!slider_toggled){
		$("#info").html("shubham_chawla@live.com");
		$("#info").css("display", "block");
	}
}, function(){
	$("#info").css("display", "none");
	$("#info").html("");
});

$("#github").hover(function(){
	if(!slider_toggled){
		$("#info").html("GitHub");
		$("#info").css("display", "block");
	}
}, function(){
	$("#info").css("display", "none");
	$("#info").html("");
});