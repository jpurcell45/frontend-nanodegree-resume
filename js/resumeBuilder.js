var work = {
    "jobs": [{
            "title": "Engineering Technician",
            "employer": "Intel",
            "dates": "1994 to Present",
            "location": "Hillsboro OR",
            "description": "Installed, maintained, and modified wafer processing equipment."
        },
        {
            "title": "Senior Licensed Reactor Operator",
            "employer": "Portalnd General Electric",
            "dates": "1987 to 1994",
            "location": "Rainier OR",
            "description": "Supervised the operation of the nuclear plant"
        },
        {
            "title": "Nuclear Electronic Technician",
            "employer": "US Navy",
            "dates": "1980 to 1987",
            "location": "San Diego CA",
            "description": "Operated the nuclear reactor on a submarine and maintained all nuclear electronic equipment."
        }
    ]
};
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();
//Above JSONlint passed
//projects
var projects = {
    "projects": [{
            "title": "My first webpage",
            "dates": "March 2017",
            "description": "Webpage design during Udacity course",
            "images": []
        },
        {
            "title": "Fake Project",
            "dates": "2016",
            "description": "Filler",
            "images": ["images/fry.jpg"]

        }
    ]
};
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[i].images.length > 0) {
            for (img = 0; img < projects.projects[i].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};
projects.display();
//Above JSONlint passed
//Bio
var bio = {
    "name": "James Purcell",
    "role": "Web Developer",
    "welcomeMessage": "Thanks for checking out my resume",
    "biopic": "images/pic.jpg",
    "contacts": {
        "mobile": "503-918-2277",
        "email": "pur.jim@gmail.com",
        "github": "jpurcell45",
        "location": "Oregon"
    },
    "skills": ["Results oriented", "Timely", "Accurate"]
};
bio.display = function() {
var nam = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(nam);
var role = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(role);
//Top contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);
//Skills Section
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}
};
bio.display();
//Education Section
var education = {
    "schools": [{
            "name": "Brady High School",
            "location": "Brady, TX",
            "degree": "High School",
            "dates": "May 1980",
            "url": "",
            "majors": ["High School Diploma"]
        },
        {
            "name": "New York Regents College",
            "location": "New York",
            "degree": "AS",
            "dates": "July 1986",
            "url": "",
            "majors": ["N/A"]
        }
    ],
    "onlineCourses": [{
            "title": "Frontend Web design",
            "school": "Udacity",
            "dates": "Feb - Aug 2017",
            "url": ""
        },
        {
            "title": "Filler",
            "school": "Thonby",
            "dates": "1890",
            "url": ""
        }

    ]
};
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        //append(formattedSchoolName) with formattedSchoolDegree to put on one line
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        //append(formattedOnlineTitle) with formattedOnlineSchool to put on one line
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();
//Above JSONlint passed
//clickLocations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
//Internationalize name button
$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
// Google Map
$("#mapDiv").append(googleMap);
