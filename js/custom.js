/*
	DATA
*/

var tab_data = [
	{name: "about", data: "<div class='container-fuild'><h3 class='raleway_font'><i class='fas fa-user-circle'></i> About Me</h3><hr><div class='row raleway_font' style='padding-left: 5%; padding-right: 5%;'><div class='col-md-6'><strong><i class='fas fa-user-graduate'></i> EDUCATION</strong><ul><li>B.E. in Electronics & Communications<br><span style='font-size: 0.8em;'>Thapar Institute of Engineering & Technology<br>2015 - Present</span></li><li>Class XII<br><span style='font-size: 0.8em;'>Modern Public School, Bhiwadi<br>2014 – 2015</span></li><li>Class X<br><span style='font-size: 0.8em;'>Modern Public School, Bhiwadi<br>2012 – 2013</span></li></ul></div><div class='col-md-6'><strong><i class='fas fa-basketball-ball'></i> INTERESTS</strong><ul><li>Technology & Gadgets</li><li>Mentoring Juniors</li><li>Swimming</li><li>Chess</li></ul><strong><i class='fas fa-language'></i> LANGUAGES</strong><ul><li>English<br><p class='text-muted'>Professional</p></li><li>Hindi<br><p class='text-muted'>Native</p></li></ul></div></div></div>"},
	{name: "projects", data: [
		{
			title: "Project Sales Simulation",
			img: "product_sales.png",
			text: "This project aimed to create a real-life (almost) analysis of how a product would sell in an Indian market comprising various types of population. This was a helper project in my course Innovation & Entrepreneurship during semester 6 (Q1-2 2018). This python based project used Matplot Lib to plot the results obtained as day-wise & sales-wise graphs. Other than that it exports the data in a usable CSV format.Further details are listed at the GitHub link attached along.",
			tech: "python",
			timeline: "Feb 2018 – May 2018",
			link: "https://github.com/shubham1chawla/Product-Simulation"
		},
		{
			title: "The Strategists",
			img: "thestrategists.png",
			text: "The Strategists is a monopoly based online multiplayer game based on the concepts of Foreign Direct Investment. It involves buying, trading lands in percentages and deliver a fun gameplay. The project used PHP as the backend, JS with Bootstrap as frontend along with heavy use of AJAX.",
			tech: "HTML, CSS, PHP, bootstrap",
			timeline: "Mar 2018 – Apr 2018",
			link: "http://thestrategists.000webhostapp.com"
		},
		{
			title: "Room Manager",
			img: "room_manager.png",
			text: "Room Manager is a simple backend supported webapp that uses fundamentals of SQL, PHP and Bootstrap to implement a room managing app with ability to book rooms with different user levels.",
			tech: "HTML, CSS, PHP, bootstrap",
			timeline: "Jan 2018 – Feb 2018",
			link: "https://github.com/shubham1chawla/roomManager"
		},
		{
			title: "Tennis Game",
			img: "tennis_game.jpg",
			text: "Tennis Game uses core JAVA to simulate an air-hockey sort of game. CORE java used to handle different threads and other game physics to give realistic gameplay.",
			tech: "JAVA",
			timeline: "July 2017 – Aug 2017",
			link: "https://github.com/shubham1chawla/Tennis_Game"
		},
		{
			title: "Tic Tac Toe",
			img: "tictactoe.png",
			text: "This project was my first step to game development. Implementing TicTacToe gameplay on Terminal with a smart Computer AI that forms dynamic move-table in order to play against you. Project emphasis on how the computer will react to users moves and also predict where to place its turn using complex algorithms.",
			tech: "JAVA",
			timeline: "May 2017 – Jun 2017",
			link: "https://github.com/shubham1chawla/TicTacToe"
		}
	]},
	{name: "skills", data: [
		{
			title: "HTML 5",
			icon: "<i class='fab fa-html5 fa-5x'></i>",
			level: 5
		},
		{
			title: "CSS 3",
			icon: "<i class='fab fa-css3-alt fa-5x'></i>",
			level: 3
		},
		{
			title: "JavaScript",
			icon: "<i class='fab fa-js-square fa-5x'></i>",
			level: 4
		},
		{
			title: "Bootstrap",
			icon: "<img src='img/B_black_white.svg' width='80px' height='80px' style='border-radius: 10%; opacity: 0.9;'>",
			level: 4
		},
		{
			title: "Jquery",
			icon: "<img src='img/jquery-filled.png' width='80px' height='80px; opacity: 0.9;'>",
			level: 3
		},
		{
			title: "PHP",
			icon: "<i class='fab fa-php fa-5x'></i>",
			level: 4
		},
		{
			title: "MySQL",
			icon: "<img src='img/mysql-logo-filled.png' width='80px' height='80px'; opacity: 0.9;>",
			level: 5
		},
		{
			title: "C++",
			icon: "<img src='img/c-plus-plus-logo-filled.png' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		},
		{
			title: "Python",
			icon: "<i class='fab fa-python fa-5x'></i>",
			level: 3
		},
		{
			title: "JAVA",
			icon: "<i class='fab fa-java fa-5x'></i>",
			level: 3
		},
		{
			title: "ARMv7",
			icon: "<i class='fas fa-microchip fa-5x'></i>",
			level: 3
		},
		{
			title: "Adobe Photoshop",
			icon: "<img src='img/ps.jpg' width='80px' height='80px; opacity: 0.9;'>",
			level: 5
		},
		{
			title: "Adobe Illustrator",
			icon: "<img src='img/ai.jpg' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		},
		{
			title: "Adobe Premiere Pro",
			icon: "<img src='img/ppro.png' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		},
		{
			title: "Adobe Indesign",
			icon: "<img src='img/in.jpg' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		}
	]}
];


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
	setInterval(changeTagLine, 3000);
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
	$("#home_div").css("height", (div_height-30)+"px");
	$("#inject").css("height", (div_height-30)+"px");
}

var currently_visible_page = "home";
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
			$('#inject').css("display", "block");
			build_project_page();
			$("#resize_element").css("opacity", 1);
		break;
		case "experiences":
			$("#home_div").css("display", "none");
			$('#inject').css("display", "block");
			$("#inject").html("experiences");
			$("#resize_element").css("opacity", 1);
		break;
		case "skills":
			$("#home_div").css("display", "none");
			$('#inject').css("display", "block");
			build_skill_page();
			$("#resize_element").css("opacity", 0.9);
		break;
	}
}




/*
	CHANGE TAGLINE MECHANISM
*/
var tagline_num = 0;
function changeTagLine(){
	tagline_num++;
	if(tagline_num >= highfyLinesData.length){
		tagline_num = 0;
	}
	highfyLines.innerHTML = highfyLinesData[tagline_num].name;
}





/*
	NAVBAR LINKS
*/

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












/*
	THIS SECTION IS FOR EXPANDING THE NAV BAR
*/

var slider_toggled = false;
$("a#toggle").click(function(){
	$("#toggle_div").css("display", "block");
	$("a#toggle").removeClass("fade_normal");
	$("a#toggle").addClass("fade_fade");
	$("#toggle_div").removeClass("fade_fade");
	$("#toggle_div").addClass("fade_normal");
	$("a#toggle").addClass("add-margin-neg30");
	slider_toggled = true;
	return true;
});

function toggle_slider(){
	$("a#toggle").removeClass("add-margin-neg30");
	$("#toggle_div").removeClass("fade_normal");
	$("#toggle_div").addClass("fade_fade");
	$("a#toggle").removeClass("fade_fade");
	$("a#toggle").addClass("fade_normal");
	$("#toggle_div").css("display", "none");
	slider_toggled = false;
	return true;
}










/*
	THIS SECTION IS FOR SOCIAL LINK HOVERING
*/

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






/*
	MODAL ACTION & PROJECT PAGE BUILDER
*/

function build_project_page(){
	var page_html = "<div class='container-fluid'><h3 class='raleway_font'><i class='fas fa-project-diagram'></i> Projects</h3><hr>";
	page_html += "<div class='row'>";
	var projects = tab_data[1].data;
	for(var i=0; i<projects.length; i++){
		page_html += "<div class='col-md-3'>";
		page_html += "<button id='"+i+"' class='btn btn-default project' style='background-color: rgba(0,0,0,0);' data-toggle='modal' data-target='#myModal' alt='"+i+"'>";
		page_html += "<div class='con'>";
		page_html += "<img src='img/"+projects[i].img+"' alt='"+projects[i].title+"' width='100%' height='200px' class='image'>";
		page_html += "<span class='middle raleway_font'><strong>"+projects[i].title+"<strong></span>"
		page_html += "</div>";
		page_html += "</button>";
		page_html += "</div>";
	}
	page_html += "</div>"
	$("#inject").html(page_html);
	$(".project").click(make_modal);
}

$(".project").click(make_modal);
function make_modal(){
	var id = $(this).attr("id");
	var project_details = tab_data[1].data[id];
	$("#modal_heading").html(project_details.title);
	var body_html = "";
	body_html += "<strong>SCREENSHOTS</strong><hr><img src='img/"+project_details.img+"' width='100%' height='auto'><br>";
	body_html += "<hr><strong>DESCRIPTION</strong><hr><p style='text-align: justify;'>"+project_details.text+"</p>";
	body_html += "<hr><strong>TECHNOLOGY USED</strong><hr><pre>"+project_details.tech+"</pre>";
	body_html += "<hr><strong>TIMELINE</strong><hr>"+project_details.timeline;
	body_html += "<hr><strong>LINK</strong><hr><a href='"+project_details.link+"'><pre>"+project_details.link+"</pre></a>";
	$("#modal_body").html(body_html);
}


/*
	SKILL PAGE BUILDER
*/

function build_skill_page(){
	var page_html = "<div class='container-fluid'><h3 class='raleway_font'><i class='fas fa-code'></i> Skills & Proficiency</h3><hr>";
	page_html += "<div class='row text-center' style='margin-bottom: 30px;'>";
	var skills = tab_data[2].data;
	for(var i=0; i<skills.length; i++){
		page_html += "<div class='col-md-4 col-xs-6' title='Skill Level: "+skills[i].level+"/5'>";
		page_html += "<br>"+skills[i].icon+"<br><span><strong>"+skills[i].title+"</strong></span><br>";
		for(var j=0; j<5; j++){
			if(j<skills[i].level){
				page_html += "<i class='fas fa-circle'></i>";
			}
			else{
				page_html += "<i class='far fa-circle'></i>";
			}
		}
		page_html += "<br></div>";
	}
	page_html += "</div>"
	$("#inject").html(page_html);
}