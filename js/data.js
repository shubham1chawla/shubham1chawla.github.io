/*
	DATA
*/
var tab_data = [
	{name: "about", data: [
		{
			name: "education", data: [
				{
					programme: "B.E. Electronics & Communications",
					institution: "Thapar Institute of Engineering & Technology",
					timeline: "2015 - Present"
				},
				{
					programme: "Class XII",
					institution: "Modern Public School, Bhiwadi",
					timeline: "2014 - 2015"
				},
				{
					programme: "Class X",
					institution: "Modern Public School, Bhiwadi",
					timeline: "2012 - 2013"
				}
			]
		},
		{
			name: "interests", data: [
				{
					title: "Technology & Gadgets"	
				},
				{
					title: "Mentoring peers & colleagues"
				},
				{
					title: "Swimming"	
				},
				{
					title: "Chess"
				}
			]
		},
		{
			name: "languages", data: [
				{
					title: "English",
					type: "Professional"
				},
				{
					title: "Hindi",
					type: "Native"
				}
			]
		}
	]},
	{name: "projects", data: [
		{
			title: "Blog Landing Page",
			img: "bloglandingpage1.png",
			text: "This project was designed solely to apply for a project by Mr. Hitesh Choudhary. This beautiful template uses JQuery and JS methods to inject data into HTML and to build a blog type landing page. This design was first implemented on Photoshop and then built using bootstrap, HTML, JS and CSS.",
			tech: [0,1,2,3,4,11,12],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 6,
					year: 2018
				},
				{
					name: "End-time",
					date: -1,
					month: 6,
					year: 2018
				}
			],
			link: "https://github.com/shubham1chawla/Blog-landing-page"
		},
		{
			title: "Portfolio v1.0",
			img: "portfoliov1.png",
			text: "Though this is a self-referring project, my portfolio is one of my projects that heavily focuses on front-end development skills. I started off with this project with the goal of displaying all my past projects in a way that is more appealing and effective. Since I was using GitHub for hosting, my restriction was to not use back-end for storing information. Though it was a challenge, it also helped me to improve on my JavaScript and Jquery concepts.<br>The particles effect in the background is created by <a href='https://github.com/VincentGarreau'>Vincent Garreau</a>. Check out his work at <a href='https://vincentgarreau.com/particles.js/'>https://vincentgarreau.com/particles.js/</a>",
			tech: [0,1,2,3,4,11,12],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 6,
					year: 2018
				}
			],
			link: "https://shubham1chawla.github.io/"
		},
		{
			title: "Project Sales Simulation",
			img: "product_sales.png",
			text: "This project aimed to create a real-life (almost) analysis, studying how a product would sell in the Indian market comprising different types of population. This was a helper-project in my course '<i>Innovation & Entrepreneurship</i>' during semester 6 (Q1-2 2018). This python based project used Matplot Lib to plot the results obtained as day-wise & sales-wise graphs. Other than that it exports the data in a usable CSV format. Further details are listed at the GitHub link attached along.",
			tech: [8],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 2,
					year: 2018
				},
				{
					name: "End-time",
					date: -1,
					month: 5,
					year: 2018
				}
			],
			link: "https://github.com/shubham1chawla/Product-Simulation"
		},
		{
			title: "The Strategists",
			img: "thestrategists.png",
			text: "The Strategists is a monopoly based online multiplayer game based on the concepts of Foreign Direct Investment. It involves buying, trading lands in percentages and deliver a fun gameplay. The project used PHP as the backend, JS with Bootstrap as frontend along with heavy use of AJAX.",
			tech: [0,1,2,3,4,5,6,11,12],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 3,
					year: 2018
				},
				{
					name: "End-time",
					date: -1,
					month: 4,
					year: 2018
				}
			],
			link: "http://thestrategists.000webhostapp.com"
		},
		{
			title: "Room Manager",
			img: "room_manager.png",
			text: "Room Manager is a simple backend supported webapp that uses fundamentals of SQL, PHP and Bootstrap to implement a room managing app with ability to book rooms with different user levels.",
			tech: [0,1,2,3,4,5,6,11,12],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 1,
					year: 2018
				},
				{
					name: "End-time",
					date: -1,
					month: 2,
					year: 2018
				}
			],
			link: "https://github.com/shubham1chawla/roomManager"
		},
		{
			title: "ConnecTU - Feb 2018 Edition",
			img: "connectu3.png",
			text: "After months, we published our third edition of ConnecTU in Feb 2018. This edition featured a new design language along with some fundamental changes in the structure of content. This incremental upgrade provided better engagement of the reader along with some refreshing design change.",
			tech: [11,12,14],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 12,
					year: 2017
				},
				{
					name: "End-time",
					date: -1,
					month: 2,
					year: 2018
				}
			],
			link: "https://drive.google.com/open?id=1vaDAOuSt6KN7HOjmuPCWcyybheIEuGi_"
		},
		{
			title: "Tennis Game",
			img: "tennis_game.jpg",
			text: "Tennis Game uses core JAVA to simulate an air-hockey sort of game. CORE java used to handle different threads and other game physics to give realistic gameplay.",
			tech: [9],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 7,
					year: 2017
				},
				{
					name: "End-time",
					date: -1,
					month: 8,
					year: 2017
				}
			],
			link: "https://github.com/shubham1chawla/Tennis_Game"
		},
		{
			title: "Tic Tac Toe",
			img: "tictactoe.png",
			text: "This project was my first step to game development. Implementing TicTacToe gameplay on Terminal with a smart Computer AI that forms dynamic move-table in order to play against you. Project emphasise on how the computer will react to users moves and also predict where to place its turn using complex algorithms.",
			tech: [9],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 5,
					year: 2017
				},
				{
					name: "End-time",
					date: -1,
					month: 6,
					year: 2017
				}
			],
			link: "https://github.com/shubham1chawla/TicTacToe"
		},
		{
			title: "ConnecTU - May 2017 Edition",
			img: "connectu2.jpg",
			text: "As we moved on, we matured our content and published the second edition of ConnecTU in May 2017. With more sarcastic and witty content that college students love, we featured many submissions. This edition contained more designing efforts as well as some strategic content allowing a better reading experience for readers.",
			tech: [11,12,14],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 5,
					year: 2017
				},
				{
					name: "End-time",
					date: -1,
					month: 6,
					year: 2017
				}
			],
			link: "https://drive.google.com/open?id=0Bz1pYAhkxvTIMW5fZzdPMDJPWUE"
		},
		{
			title: "ConnecTU - Jan 2017 Edition",
			img: "connectu1.png",
			text: "As mentioned in my experience, ConnecTU was our team's attempt to revive a long-dead newsletter that Student Alumni Interaction Cell used to print in early days of its inception. It was the first edition I designed and edited. It covered the hot topics of those days and some previous events that happened at Thapar University.",
			tech: [11,12,14],
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 12,
					year: 2016
				},
				{
					name: "End-time",
					date: -1,
					month: 1,
					year: 2017
				}
			],
			link: "https://drive.google.com/open?id=0Bz1pYAhkxvTIMzNibHp6ak9OeFk"
		}
	]},
	{name: "experiences", data: [
		{
			title: "CEC member, T.I.E.T.A.A",
			img: "tietaa.jpg",
			text: "CEC is an acronym for Central Executive Committee. Being a CEC member I was exposed to a vast number of alumni of TIET. Not only I have organised several alumni meets, but have also managed a huge database of our alumni network that Thapar Institute never fails to boast. Moreover being the President of Student Alumni Interaction Cell and a member of CEC brings in their own set of perks along with the opportunity to meet such great alumni. Under their guidance, the amount of opportunity you are exposed to is just infinite.",
			pos: "Central Executive Committee member, Thapar Institute of Engineering & Technology Alumni Association",
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 1,
					year: 2018
				}
			]
		},
		{
			title: "President SAIC, T.I.E.T.",
			img: "saic.jpg",
			text: "<i>'With great power comes great responsibilities'</i>, A famous quote once said. But is it only powers that we are talking? Well, it doesn't, at least my journey in SAIC proved me otherwise. From a mere team member to the president of this cell, I have grown a lot when it comes to dealing with real-life challenges. Many of them come from my experience in SAIC. I have been a part of Student Alumni Interaction Cell since my 2nd semester in B.E programme. Most of my soft skills developed during my journey here. But being a president means not just to learn but to make everyone with you grow along.  And that's when great leaders are born. From what have I learned from my seniors, it is more gratifying to help your juniors and work alongside them rather than just ordering them to execute the work. Another soft skill that I encountered was to accept your mistakes. No one is made to be perfect, everyone has their flaws. <br>There were few achievements along the way as well. With the help of my coordinators, we were able to organise great events like Troubleshoot and Global Leadership Summit 2018 at such a magnificent scale. For me, being the president is just a position that brings in great responsibilities to fulfil and several experiences to learn from.",
			pos: "President, Studen Alumni Interaction Cell, Thapar Institute",
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 12,
					year: 2017
				}
			]
		},
		{
			title: "O.E.C. Saturnalia 2017",
			img: "sat.jpg",
			text: "Being an Overall Event Coordinator (the one who heads all the work related to the event & acts as a bridge between various departments) of a single event brings a lot of changes in you. You become a better version of yourself. But being the OEC of a college fest is taking that learning curve to a whole new level. In a fest like Saturnalia, where every day brings up new events, one could just imagine how things are sorted out in such hassle.<br>My journey as an OEC started off in April 2017. As OEC, I came across many hurdles, one of them being to maintain interdepartmental synchronization and proper flow of tasks amongst them. It requires judicious managemental skills to overcome such scenarios. The most important thing that I learned during my journey was the ability to take charge of things and to lead a team with a common agenda. For me, learning along made this experience worth sharing.",
			pos: "Overall Event Coordinator, Saturnalia 2017 (Annual Techno-Cultural Fest, Thapar Institute)",
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 4,
					year: 2017
				},
				{
					name: "End-time",
					date: -1,
					month: 11,
					year: 2017
				}
			]
		},
		{
			title: "O.E.C. Global Leadership Summit",
			img: "gls.jpg",
			text: "Global Leadership Summit 2017 was the 'Life-Changing Event' for me. Not only it was my key to success, but it also shifted my perspective on how I should coordinate with my colleagues. When my then-SAIC Presidents named me as an OEC of GLS 2017, at first, it seemed like everyone has to just blindly follow my lead. But being just nominated to be a leader does not make you one, this I discovered in a hard way. Luckily, my seniors supported me during my journey. They explained to me the importance of working in a team and also majored their focus on respecting everyone's opinion.<br>Working in a team means you should trust them. This was yet another soft skill that I developed during my time as OEC. In the end, it was 'we' who pulled off a successful event and not just 'I'.",
			pos: "Overall Event Coordinator, Global Leadership Summit 2017",
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 2,
					year: 2017
				},
				{
					name: "End-time",
					date: -1,
					month: 4,
					year: 2017
				}
			]
		},
		{
			title: "O.E.C. Great Britain Debate 2017",
			img: "gbd.jpg",
			text: "Great Britain Debate was a wildcard opportunity for me, as I was offered to be one of the coordinators of the event just a few weeks before the event. As great as the opportunity, it was a challenge for me to cope up with event's preparation. During my journey as one of the coordinator, I managed many of the logistic preparation and even designed graphics for online publicity.<br>After seeing an event that was organised by British Commission, New Delhi itself, the level of detail we focused upon were on par. As the saying goes, <i>'The most important tactic in an argument, next to being right, is to leave an escape hatch for your opponent, so that he can gracefully swing over to your side without an embarrassing loss of face.'</i>, we should all be respectful in our fights as well.",
			pos: "Overall Event Coordinator, Great Britain Debate 2017 (conducted by the British High Commission, New Delhi)",
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 12,
					year: 2016
				},
				{
					name: "End-time",
					date: -1,
					month: 1,
					year: 2017
				}
			]
		},
		{
			title: "Media & Branding Head",
			img: "connectu.jpg",
			text: "As a freshman, the very first real responsibility comes from your urge to prove yourself. This was the time when I was given a great opportunity to revive a long-dead newsletter that Student Alumni Interaction Cell used to print in early days of its inception. Though I had my experience in graphic designing earlier in my freshman days, designing a regularly publishing newsletter was a challenge I never faced before. It was my urge to prove myself which pushed me to my bounds and enabled me to reach our target.<br>Link to the newsletter I designer is <u><a href='https://drive.google.com/open?id=1wCBdwkIUecFbCklYHCLdhrWOHMjG6oCQ'>here.</a></u>",
			pos: "Media & Branding Head, Student Alumni Interaction Cell",
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 10,
					year: 2016
				},
				{
					name: "End-time",
					date: -1,
					month: 4,
					year: 2017
				}
			]
		},
		{
			title: "Designing Head, Saturnalia 2016",
			img: "sat16.jpg",
			text: "I wouldn't have been able to design my own portfolio if it wasn't for Saturnalia 2016. It provided me with the opportunity to be the Designing Head, in days when the positions of heads were reserved strictly for seniors of pre-final & final years, I was able to achieve mine just after the first year.<br>My journey was filled up with regular updating of publicity material, anything remotely graphical. With so frequent demand for designs including posters, flexes and banners and focusing on my studies as well taught me how to manage time and devote it to things that were of absolute priorities.",
			pos: "Designing Head, Saturnalia 2016 (Annual Techno-Cultural Fest, Thapar Institute)",
			timeline: "April 2016 – October 2016",
			timeline: [
				{
					name: "Start-time",
					date: -1,
					month: 4,
					year: 2016
				},
				{
					name: "End-time",
					date: -1,
					month: 10,
					year: 2016
				}
			]
		}
	]},
	{name: "skills", data: [
		{
			id: 0,
			title: "HTML 5",
			icon: "<i class='fab fa-html5 fa-5x'></i>",
			level: 5
		},
		{
			id: 1,
			title: "CSS 3",
			icon: "<i class='fab fa-css3-alt fa-5x'></i>",
			level: 4
		},
		{
			id: 2,
			title: "JavaScript",
			icon: "<i class='fab fa-js-square fa-5x'></i>",
			level: 4
		},
		{
			id: 3,
			title: "Bootstrap",
			icon: "<img src='img/skills/B_black_white.svg' width='80px' height='80px' style='border-radius: 10%; opacity: 0.9;'>",
			level: 4
		},
		{
			id: 4,
			title: "Jquery",
			icon: "<img src='img/skills/jquery-filled.png' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		},
		{
			id: 5,
			title: "PHP",
			icon: "<i class='fab fa-php fa-5x'></i>",
			level: 4
		},
		{
			id: 6,
			title: "MySQL",
			icon: "<img src='img/skills/mysql-logo-filled.png' width='80px' height='80px'; opacity: 0.9;>",
			level: 5
		},
		{
			id: 7,
			title: "C++",
			icon: "<img src='img/skills/c-plus-plus-logo-filled.png' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		},
		{
			id: 8,
			title: "Python",
			icon: "<i class='fab fa-python fa-5x'></i>",
			level: 3
		},
		{
			id: 9,
			title: "JAVA",
			icon: "<i class='fab fa-java fa-5x'></i>",
			level: 3
		},
		{
			id: 10,
			title: "ARMv7",
			icon: "<i class='fas fa-microchip fa-5x'></i>",
			level: 3
		},
		{
			id: 11,
			title: "Adobe Photoshop",
			icon: "<img src='img/skills/ps.jpg' width='80px' height='80px; opacity: 0.9;'>",
			level: 5
		},
		{
			id: 12,
			title: "Adobe Illustrator",
			icon: "<img src='img/skills/ai.jpg' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		},
		{
			id: 13,
			title: "Adobe Premiere Pro",
			icon: "<img src='img/skills/ppro.png' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		},
		{
			id: 14,
			title: "Adobe Indesign",
			icon: "<img src='img/skills/in.jpg' width='80px' height='80px; opacity: 0.9;'>",
			level: 4
		}
	]},
	{name: "taglines", data: [
		{name: "You've got <strong>Ideas</strong>? Let's give them shape."},
		{name: "I'm a Freelancer"},
		{name: "I'm a Full Stack Developer"},
		{name: "I'm a UI/UX Designer"},
		{name: "I'm a proud Indian"},
		{name: "Contact me!"},
		{name: "I <i class='fas fa-heart'></i> Food"}
	]}
];