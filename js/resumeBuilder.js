//ALL biography information and data
var bio = {
	"name": "Levoski Brown",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "555-555-5555 ",
		"email" : "levoskibrown@gmail.com ",
		"github": "Levoski ",
		"twitter" : "levoskibrown",
		"location": "Atlanta, GA "
	},
	"welcomeMessage": "I am a hard working Information Technology professional with a strong passion and focus on software development.",
	"skills": ["HTML", "CSS", "JavaScript", "jQuery", ],
	"bioPic": "images/8bitLevoski.jpg",
	display: function() {

		//Append Bio information
		var formattedName = bio.name;
		var formattedRole = bio.role;
		HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
		HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);
		$("#header").prepend(HTMLheaderRole);
		$("#header").prepend(HTMLheaderName);

		var mobile = bio.contacts.mobile;
		var formattedMobile = HTMLmobile.replace("%data%", mobile);
		$("#topContacts").append(formattedMobile);

		var email = bio.contacts.email;
		var formattedEmail = HTMLemail.replace("%data%", email);
		$("#topContacts").append(formattedEmail);

		var github = bio.contacts.github;
		var formattedGit = HTMLgithub.replace("%data%", github);
		$("#topContacts").append(formattedGit);

		var twitter = bio.contacts.twitter;
		var formattedTweet = HTMLtwitter.replace("%data%", twitter);
		$("#topContacts").append(formattedTweet);

		var location = bio.contacts.location;
		var formattedLocation = HTMLlocation.replace("%data%", location);
		$("#topContacts").append(formattedLocation);

		var bioPic = bio.bioPic;
		var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
		$("#header").append(formattedBioPic);

		var welcomeMessage = bio.welcomeMessage;
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
		$("#header").append(formattedWelcome);

		//Footer
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGit);
		$("#footerContacts").append(formattedTweet);
		$("#footerContacts").append(formattedLocation);

		//Appends skills to skills section
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

			$("#skills").append(formattedSkill);
		}
	}
}
bio.display();

//Here is the object holding all information about work experiences and previous employers
var work = {
	"jobs": [
		{
			"employer": "LEGOLAND",
			"title": "Ride Operator",
			"date": "February 2013 - September 2014",
			"location": "Buckhead, GA",
			"description": "I was tasked with entertaining guests and operated rides throughout the attraction." 

		}, {
			"employer": "GameStop",
			"title": "Game Advisor",
			"date": "November 2014 - January 2015",
			"location": "Atlanta, GA",
			"description": "Sale games using register as well as advise customers of popular titles to purchase to increase market revenue."
		}, {
			"employer": "Southern Company/Georgia Power",
			"title": "Desktop Support Intern",
			"date": "January 2015 - Present",
			"location": "Atlanta, GA",
			"description": "In charge of basic documentation of insidences using REMEDY software to access cases, and maintaining of instances of hardware failure, repairs, installations, shipments, etc."
		},
	],
	display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
			$(".work-entry:last").append(formattedDate);	

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);	
		}
	}
}
work.display();

//Previous projects I created will be accessed from this object.
var projects = {
	"projects": [
	{
			"title": "Udacity Project 1 - Portfolio Mockup",
			"dates": "October 2014",
			"description": "Create a simple website from a mockup PDF example using basic HTML and CSS format and styles as well as utilize the BootStrap framework for styling website layout.",
			"images": [
				"images/pic1.jpg",
				"images/pic2.jpg",
				"images/pic3.jpg",
			],
		}, 
		{
			"title": "Udacity Project 2 - Interactive Resume",
			"dates": "December 2014",
			"description": "Create a website using the JavaScript programming language to build a responsive resume for your projects."
		}, 
		{
			"title": "Udacity Project 3 - Classic Arcade Game Clone",
			"dates": "February 2015",
			"description": "Using JavaScript and HTML5 Canvas as a platform to build from the provided game engine you are tasked with recreating the classic game Frogger and inserting different art assets."
		}, 
		{
			"title": "Udacity Project 4 - Wesite Optimization",
			"dates": "February 2015",
			"description": "You are provided a website and must alter its components to make the website run at 60 frames per second."
		}, 
		{
			"title": "Udacity Project 5 - Neighborhood Map",
			"dates": "May 2015",
			"description": "Develop a single-page web application featuring a map of your neighborhood you would like to visit."
		}, 
		{
			"title": "Udacity Project 6 - Feed Reader Testing",
			"dates": "May 2015",
			"description": "Learn about testing with JavaScript to learn about TDD (test-driven development) to write tests first, before they ever start developing their application."
		}
	],
	display: function() {
		//Encapsulates the above projects into funtion display()
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").prepend(formattedTitle);

			var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDate);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			for (image in projects.projects[project].images) 
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
			
		}
	}
}
projects.display();

//ALL education information and data
var education = {
	"schools": [
		{
			"name": "Southern Polytechnic State University",
			"location": "Marietta, GA",
			"degree": " Bachelor's Degree",
			"major": "Game Design & Development",
			"dates": "2012 - 2013",
			"url": "www.spsu.edu",
			}, 
		{
			"name": "Full Sail University",
			"location": "Winter Park, FL",
			"degree": "Bachelor's Degree",
			"major": "Game Design",
			"dates": "2014 - current",
			"url": "www.fullsail.edu",
			},
		],
	"onlineCourse": [
		{
			"title": "Intro to HTML and CSS",
			"schoolName": "AT&T Udacity",
			"date": "2014 - 2015",
			"url": "www.udacity.com",
			},
		{
			"title": "JavaScript Basics",
			"schoolName": "AT&T Udacity",
			"date": "2014 - 2015",
			"url": "www.udacity.com",
			},
		{
			"title": "Intro to jQuery",
			"schoolName": "AT&T Udacity",
			"date": "2014 - 2015",
			"url": "www.udacity.com",
			},
		],
	display: function() {
		//Education function
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedschoolName);

			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedschoolDegree);

			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedschoolDates);

			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedschoolLocation);

			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedschoolMajor);

			
		}
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineClasses);
		for (course in education.onlineCourse) {

			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
			$(".education-entry:last").append(formattedonlineTitle);

			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].date);
			$(".education-entry:last").append(formattedonlineDates);

			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].schoolName);
			$(".education-entry:last").append(formattedonlineSchool);

			var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
			$(".education-entry:last").append(formattedonlineUrl);
		}
	}
}
education.display();

//Other Sections
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//Return a list of job's
function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work.obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

//Add Internationalize button
$("#main").append(internationalizeButton);

//Reformat the given input into internationalize form
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase;
	name[0] = slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);