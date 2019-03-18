

var travels = [{
            "year": "2008",
            "season": "Spring",
            "country": "Prague",
            "continent": "Europe"
            },
			{
			"year": "2008",
            "season": "Spring",
            "country": "Slovakia",
            "continent": "Europe"
            },
			{
            "year": "2008",
            "season": "spring",
            "country": "Hungry",
            "continent": "Europe"
            },
			{
			"year": "2008",
            "season": "Fall",
            "country": "Vietnam",
            "continent": "Asia"
            },
			{
			"year": "2008",
            "season": "Fall",
            "country": "Laos",
            "continent": "Asia"
            },
			{
			"year": "2008",
            "season": "Fall",
            "country": "Cambodia",
            "continent": "Asia"
            },
			{
			"year": "2009",
            "season": "Winter",
            "country": "Buthan",
            "continent": "Asia"
            },
						{
			"year": "2009",
            "season": "Winter",
            "country": "India",
            "continent": "Asia"
            },			{
			"year": "2009",
            "season": "Winter",
            "country": "Nepal",
            "continent": "Asia"
            },
			{
			"year": "2009",
            "season": "Fall",
            "country": "Namibia",
            "continent": "Africa"
            },
			{
			"year": "2009",
            "season": "Fall",
            "country": "Botswana",
            "continent": "Africa"
            },
			{
			"year": "2009",
            "season": "Fall",
            "country": "Zambia",
            "continent": "Africa"
            },
			
];
            //Can I use this instead of a database??
			


	//$("#travel").append("<b>" + travels.travels[0].year + "</b> <br>");
	//$("#travel").append(travels.travels[0].season + "<br>");
	//$("#travel").append("<li>" + travels.travels[0].country + "</li>");

function myFunction(travels) {
	var input = document.getElementById("myInput").value;
	var filteredTravels = [];

	for (i= 0;  i < travels.length; i++) {
		
	//var place ="string";
	//year is the same
	if (input == travels[i].year || input.toUpperCase() == travels[i].continent.toUpperCase()){
	filteredTravels.push(travels[i]);}
	
		
}
	display(filteredTravels);

}
	
	
	var year = 0;
	var season = "FFF";
	
	console.log(travels.length);

function display(travels){	
$("#travel").empty();

var year = 0;
	var season = "FFF";

for (i= 0;  i < travels.length; i++) {
		
		
		
	var place ="string";
	//year is the same
	if (year == travels[i].year){
		//season is the same
		if (season == travels[i].season.toUpperCase()) {
			//post country
			$("#travel").append("<li>" + travels[i].country + "</li>");
		}
		//changed season
		else {
			$("#travel").append(travels[i].season + "<br>");
			$("#travel").append("<li>" + travels[i].country + "</li>");
			season = travels[i].season.toUpperCase()
		}
	//changed year	
	}
	else {
	//$("#travel").append("<hr>");
		year = travels[i].year;
		season = travels[i].season.toUpperCase();
		$("#travel").append("<b>" + travels[i].year + "</b> <br>");
		$("#travel").append(travels[i].season + "<br>");
		$("#travel").append("<li>" + travels[i].country + "</li>");

	}
}
}

display(travels);

//should be able to put all travels in json and loop through it :)
 //object with array??
/*	"travels": [ {
		"year": "2010",
		"winter": [],
		"spring": ["Russia"],
		"summer": ["Ecuador/Peru (Galapagos)", "India"],
		"fall": []
	}, {
		"year": "2011",
		"winter": ["Mali/Burkina Faso"],
		"spring": ["5 Stans", "Italy"],
		"summer": [],
		"fall": ["Indonesia"]
	}, {
		"year": "2012",
		"winter": [],
		"spring": [],
		"summer": [],
		"fall": ["Croatia, etc", "Romania", "Summer", "Mongolia", "Winter", "Myanmar", "South India"]
	}, {
		"year": "2013",
		"winter": ["Thailand", "Sri Lanka", "Malaysia", "Borneo"],
		"spring": [],
		"summer": ["Uganda"],
		"fall": ["West Africa", "Madagascar"]
	}, {
		"year": "2014",
		"winter": ["Bangladesh", "India"],
		"spring": [],
		"summer": ["Silk Road"],
		"fall": ["India"]
	}, {
		"year": "2015",
		"winter": [],
		"spring": ["Eastern Turkey", "China Silk Road", "Papau New Guinea", "India (Raj & Gujarat)"],
		"summer": [],
		"fall": []
	}, {
		"year": "2016",
		"winter": [],
		"spring": ["Philippians", "Iran", "Jordan", "India June-August", "Panama"],
		"summer": [],
		"fall": []
	}, {
		"year": "2017",
		"winter": ["Sudan", "Djibouti", "Ethiopia"],
		"spring": ["Caribbean", "Austria", "Paris", "Poland", "Ukraine", "England", "Iceland"],
		"summer": [],
		"fall": ["Bhutan", "Nepal", "India"]
	}]
}

*/


