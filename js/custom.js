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

window.onload = function(){
	//resizing the div
	setInterval(resize, 1000/60);

	//To change content
	setInterval(changeTagLine, 2500);
};

/*
	RESIZE MECH
*/

function resize(){
	var viewport_height = $(window).height();
	var viewport_width = $(window).width();
	var doc_width = $(document).width();
	var doc_height = $(document).height();

	//Calculating height from top and total visible area
	var margin_top_bottom = viewport_height*TOP_BOTTOM_MARGIN_MAIN_RESIZE_ELEMENT_IN_PERCENTAGE;
	var div_height = viewport_height*MAIN_HEIGHT_RESIZE_ELEMENT_IN_PERCENTAGE;

	var margin_left_right = viewport_width*LEFT_RIGHT_MARGIN_MAIN_RESIZE_ELEMENT_IN_PERCENTAGE;
	var div_width = viewport_width*MAIN_WIDTH_RESIZE_ELEMENT_IN_PERCENTAGE;

	$("#resize_element").css("height", div_height+"px").css("margin-top", margin_top_bottom+"px").css("margin-bottom", margin_top_bottom+"px");
	$("#home_div").css("height", (div_height-30)+"px");
	$("#inject").css("height", (div_height-30)+"px");
}

/*
	MANAGE PAGES
*/

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
			build_about_page();
			$('#inject').css("display", "block");
			$("#resize_element").css("opacity", 0.9);
		break;
		case "projects":
			$("#home_div").css("display", "none");
			build_project_page();
			$('#inject').css("display", "block");
			$("#resize_element").css("opacity", 0.9);
		break;
		case "experiences":
			$("#home_div").css("display", "none");
			build_experience_page();
			$('#inject').css("display", "block");
			$("#resize_element").css("opacity", 0.9);
		break;
		case "skills":
			$("#home_div").css("display", "none");
			build_skill_page();
			$('#inject').css("display", "block");
			$("#resize_element").css("opacity", 0.9);
		break;
	}
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

/*
	CHANGE TAGLINE MECHANISM
*/

var tagline_num = 0;
function changeTagLine(){
	tagline_num++;
	if(tagline_num >= tab_data[4].data.length){
		tagline_num = 0;
	}
	highfyLines.innerHTML = tab_data[4].data[tagline_num].name;
}

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
	var page_html = "<h3 class='raleway_font'><i class='fas fa-project-diagram'></i> Projects</h3><hr><div class='container-fluid' style='overflow-y: scroll;'>";
	page_html += "<div class='row'>";
	var projects = tab_data[1].data;
	for(var i=0; i<projects.length; i++){
		page_html += "<div class='col-md-3'>";
		page_html += "<button id='"+i+"' class='btn btn-default project' style='background-color: rgba(0,0,0,0);' data-toggle='modal' data-target='#myModal' alt='"+i+"'>";
		page_html += "<div class='con'>";
		page_html += "<img src='img/"+projects[i].img+"' alt='"+projects[i].title+"' width='100%' height='100%' class='image'>";
		page_html += "<span class='middle raleway_font'><strong>"+projects[i].title+"<strong></span>"
		page_html += "</div>";
		page_html += "</button>";
		page_html += "</div>";
	}
	page_html += "</div>";
	$("#inject").html(page_html);
	$(".project").click(make_project_modal);
}

$(".project").click(make_project_modal);
function make_project_modal(){
	var id = $(this).attr("id");
	var project_details = tab_data[1].data[id];
	$("#modal_heading").html(project_details.title);
	var body_html = "";
	body_html += "<img src='img/"+project_details.img+"' width='100%' height='auto'><br>";
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
	var skills = tab_data[3].data;
	for(var i=0; i<skills.length; i++){
		page_html += "<div class='col-md-4 col-xs-6' title='Skill Level: "+skills[i].level+"/5'>";
		page_html += "<br>"+skills[i].icon+"<br><span><strong>"+skills[i].title+"</strong></span><br>";
		for(var j=0; j<5; j++){
			if(j<skills[i].level){
				page_html += "<i class='fas fa-circle' style='margin-left:2px;margin-right:2px;font-size:0.6em;'></i>";
			}
			else{
				page_html += "<i class='far fa-circle' style='margin-left:2px;margin-right:2px;font-size:0.6em;'></i>";
			}
		}
		page_html += "<br></div>";
	}
	page_html += "</div>";
	$("#inject").html(page_html);
}

/*
	ABOUT PAGE BUILDER
*/

function build_about_page(){
	var page_html = "<div class='container-fluid'><h3 class='raleway_font'><i class='fas fa-user-circle'></i> About Me</h3><hr>";
	page_html += "<div class='row raleway_font' style='padding-left: 5%; padding-right: 5%;'>";

	// Education part
	page_html += "<div class='col-md-6'>";
	page_html += "<strong><i class='fas fa-user-graduate'></i> EDUCATION</strong>";
	page_html += "<ul>";
	var education_details = tab_data[0].data[0].data;
	for(var i=0; i<education_details.length; i++){
		page_html += "<li>";
		page_html += education_details[i].programme+"<br>";
		page_html += "<span style='font-size: 0.8em;'>"+education_details[i].institution+"<br>"+education_details[i].timeline+"</span><br>";
		page_html += "</li>";
	}
	page_html += "</ul>";
	page_html += "</div>";

	// Interests part
	page_html += "<div class='col-md-6'>";
	page_html += "<strong><i class='fas fa-basketball-ball'></i> INTERESTS</strong>";
	page_html += "<ul>";
	var interests_details = tab_data[0].data[1].data;
	for(var i=0; i<interests_details.length; i++){
		page_html += "<li>"+interests_details[i].title+"</li>";
	}
	page_html += "</ul>";

	// Languages Part
	page_html += "<strong><i class='fas fa-language'></i> LANGUAGES</strong>";
	page_html += "<ul>";
	var languages_details = tab_data[0].data[2].data;
	for(var i=0; i<languages_details.length; i++){
		page_html += "<li>"+languages_details[i].title+"<br><p class='text-muted'>"+languages_details[i].type+"</p></li>";
	}
	page_html += "</ul>";
	page_html += "</div>";

	page_html += "</div></div>";
	$("#inject").html(page_html);
}

/*
	EXPERIENCE PAGE BUILDER
*/

function build_experience_page(){
	var page_html = "<h3 class='raleway_font'><i class='fas fa-users'></i> Experiences</h3><hr><div class='container-fluid' style='overflow-y: scroll;'>";
	page_html += "<div class='row'>";
	var experience = tab_data[2].data;
	for(var i=0; i<experience.length; i++){
		page_html += "<div class='col-md-3'>";
		page_html += "<button id='"+i+"' class='btn btn-default experience' style='background-color: rgba(0,0,0,0);' data-toggle='modal' data-target='#myModal' alt='"+i+"'>";
		page_html += "<div class='con'>";
		page_html += "<img src='img/"+experience[i].img+"' alt='"+experience[i].title+"' width='100%' height='100%' class='image'>";
		page_html += "<span class='middle raleway_font'><strong>"+experience[i].title+"<strong></span>"
		page_html += "</div>";
		page_html += "</button>";
		page_html += "</div>";
	}
	page_html += "</div>";
	$("#inject").html(page_html);
	$(".experience").click(make_experience_modal);
}

$(".experience").click(make_experience_modal);
function make_experience_modal(){
	var id = $(this).attr("id");
	var experience_details = tab_data[2].data[id];
	$("#modal_heading").html(experience_details.title);
	var body_html = "";
	body_html += "<div style='width:100%;text-align:center;'><img src='img/"+experience_details.img+"' width='50%' height='auto'></div><br>";
	body_html += "<hr><strong>Position: </strong>"+experience_details.pos;
	body_html += "<br><strong>Timeline: </strong>"+experience_details.timeline;
	body_html += "<hr><strong>Description</strong><p style='text-align: justify;'>"+experience_details.text+"</p>";
	$("#modal_body").html(body_html);
}