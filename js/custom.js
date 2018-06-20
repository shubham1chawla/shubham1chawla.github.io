// CONSTANTS
const TOP_BOTTOM_MARGIN_MAIN_RESIZE_ELEMENT_IN_PERCENTAGE = 0.10;
const MAIN_HEIGHT_RESIZE_ELEMENT_IN_PERCENTAGE = 0.8;

const LEFT_RIGHT_MARGIN_MAIN_RESIZE_ELEMENT_IN_PERCENTAGE = 0.1;
const MAIN_WIDTH_RESIZE_ELEMENT_IN_PERCENTAGE = 0.8;

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
	{name: "projects", data: "<div class='container-fuild' style='height: 90%; overflow-y: scroll; overflow-x: hidden'><h3 class='raleway_font'><i class='fas fa-project-diagram'></i> Projects</h3><hr><ul><li><div class='raleway_font'><strong>Project Sales Simulation</strong><div class='row'><div class='col-md-6'><p style='text-align: justify;'>This project aimed to create a real-life (almost) analysis of how a product would sell in an Indian market comprising various types of population. This was a helper project in my course Innovation & Entrepreneurship during semester 6 (Q1-2 2018). This python based project used Matplot Lib to plot the results obtained as day-wise & sales-wise graphs. Other than that it exports the data in a usable CSV format.Further details are listed at the GitHub link attached along.</p></div><div class='col-md-6'><img src='img/product_sales.png' alt='Product-Simulation' width='100%' height='auto'><br><br><b>TECHNOLOGY USED</b><pre>python</pre><b>TIMELINE</b><p>Feb 2018 – May 2018</p><b>LINK</b><pre>https://github.com/shubham1chawla/Product-Simulation</pre></div></div></div></li><li><div class='raleway_font'><strong>The Strategists</strong><div class='row'><div class='col-md-6'><p style='text-align: justify;'>The Strategists is a monopoly based online multiplayer game based on the concepts of Foreign Direct Investment. It involves buying, trading lands in percentages and deliver a fun gameplay. The project used PHP as the backend, JS with Bootstrap as frontend along with heavy use of AJAX.</p></div><div class='col-md-6'><img src='img/thestrategists.png' alt='Product Sales pic' height='auto' width='100%'><br><br><b>TECHNOLOGY USED</b><pre>HTML, CSS, PHP, bootstrap</pre><b>TIMELINE</b><p>Mar 2018 – Apr 2018</p><b>LINK</b><pre>http://thestrategists.000webhostapp.com</pre></div></div></div></li><li><div class='raleway_font'><strong>Room Manager</strong><div class='row'><div class='col-md-6'><p style='text-align: justify;'>Room Manager is a simple backend supported webapp that uses fundamentals of SQL, PHP and Bootstrap to implement a room managing app with ability to book rooms with different user levels.</p></div><div class='col-md-6'><b>TECHNOLOGY USED</b><pre>HTML, CSS, PHP, bootstrap</pre><b>TIMELINE</b><p>Jan 2018 – Feb 2018</p><b>LINK</b><pre>https://github.com/shubham1chawla/roomManager</pre></div></div></div></li><li><div class='raleway_font'><strong>Tennis Game</strong><div class='row'><div class='col-md-6'><p style='text-align: justify;'>Tennis Game uses core JAVA to simulate an air-hockey sort of game. CORE java used to handle different threads and other game physics to give realistic gameplay.</p></div><div class='col-md-6'><b>TECHNOLOGY USED</b><pre>JAVA</pre><b>TIMELINE</b><p>July 2017 – Aug 2017</p><b>LINK</b><pre>https://github.com/shubham1chawla/Tennis_Game</pre></div></div></div></li></ul></div>"}
];

function managePage(){
	toggle_slider();
	switch(currently_visible_page){
		case "home":
			$("#inject").html("");
			$("#inject").css("display", "none");
			$("#home_div").css("display", "block");
			$("#resize_element").css("opacity", 0.9);
		break;
		case "about":
			$("#home_div").css("display", "none");
			$("#inject").html(tab_data[0].data);
			$('#inject').css("display", "block");
			$("#resize_element").css("opacity", 1);
		break;
		case "projects":
			$("#home_div").css("display", "none");
			$("#inject").html(tab_data[1].data);
			$('#inject').css("display", "block");
			$("#resize_element").css("opacity", 1);
		break;
		case "experiences":
			$("#home_div").css("display", "none");
			$("#inject").html("experiences");
			$("#resize_element").css("opacity", 1);
		break;
		case "skills":
			$("#home_div").css("display", "none");
			$("#inject").html("skills");
			$("#resize_element").css("opacity", 1);
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