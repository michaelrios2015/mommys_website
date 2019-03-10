'use strict';

    "travels": [{
            "year": "2008",
            "season": ["spring"],
            "country": ["Prague"],
            "continent": [""]
            },]
            Can I use this instead of a database??

//should be able to put all travels in json and loop through it :)
var travels = { //object with array??
	"travels": [{
		"year": "2008",
		"winter": [],
		"spring": ["Prague", "Slovakia", "Hungry"],
		"summer": [],
		"fall": ["Vietnam", "Laos", "Cambodia (Angkor Wat) 1 day"]
	}, {
		"year": "2009",
		"winter": [],
		"spring": [],
		"summer": [],
		"fall": ["Namibia", "Botswana", "Zambia", "Winter", "Buthan", "India", "Nepal"]
	}, {
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

var travel = [];

for (travel in travels.travels) {
	var place ="string"
	$("#travel").append("<b>" + travels.travels[travel].year + "</b> <br>");
	if (travels.travels[travel].winter.length > 0) {
		$("#travel").append("Winter " + "<br>");
		for (place in travels.travels[travel].winter) {
			$("#travel").append("<li>" + travels.travels[travel].winter[place] + "</li>");
		}
	}
	if (travels.travels[travel].spring.length > 0) {
		$("#travel").append("Spring <br> ");
		for (place in travels.travels[travel].spring) {
			$("#travel").append("<li>" + travels.travels[travel].spring[place] + "</li>");
		}
	}
	if (travels.travels[travel].summer.length > 0) {
		$("#travel").append("Summer <br>");
		for (place in travels.travels[travel].summer) {
			$("#travel").append("<li>" + travels.travels[travel].summer[place] + "</li>");
		}
	}
	if (travels.travels[travel].fall.length > 0) {
		$("#travel").append("Fall <br>");
		for (place in travels.travels[travel].fall) {
			$("#travel").append("<li>" + travels.travels[travel].fall[place] + "</li>");
		}
	}
	$("#travel").append("<hr>");
}


var countries = { //array of objects with
	"countries": [{
		"continent": "Americas",
		"places": ["Canada: 92", "Mexico: 62-63", "Panama: 61", "Peru: 64-68", "Columbia: 66", "Bolivia: 67", "Chile: 66", "Ecuador: 66 and 2010", "Galapagos 10", "Curacao", "Dominican Republic"]
	}, {
		"continent": "Africa",
		"places": ["Egypt 94", "Namibia 09", "Botswana 09", "Zambia 09", "Ethiopia: 10", "Burkina Faso 11", "Mali 11", "Uganda 13", "Madagascar 13", "Niger 13", "Bernin 13", "Togo 13", "Ghana 13"]
	}, {
		"continent": "Middle east",
		"places": ["Israel 94", "Iran 16", "Jordan 16"],
	}, {
		"continent": "Asia",
		"places": ["Japan 58", "Vietnam 08", "Laos", "Cambodia", "Nepal 09", "India 09, 12, 14, 10, 15", "Bhutan 09", "China 10, 14", "Thailand 10", "Indonesia  11", "Myanmar (burma) 12", "Sri Lanka 13", "Malaysia 13 (Borneo)", "Bangladesh 14", "Pakistan 14", "Philippians 16", "PNG 15"],
	}, {
		"continent": "Central Asia",
		"places": ["Kazakhstan 14", "Kzygenistan", "Uzbekistan", "Turkmenistan", "Tajikistan", "Mongolia 12"],
	}, {
		"continent": "Europe",
		"places": ["England 90, 05", "France 90, 05", "Holland 90, 05", "Spain 90, 99, 01", "Portugal 01", "Greece 93", "Prague 08", "Slovakia 08", "Hungry 08", "Russia 10", "Belgium 05", "Italy 01", "Slovenia 12", "Croatia", "Montenegro", "Bosnia", "Romania"],
	}]
}




	
	var country = [];
	
for (country in countries.countries) {
	var place ="string";
	console.log("here");
	$("#continent").append("<b>" + countries.countries[country].continent + "</b> <br>");
	for (place in countries.countries[country].places) {
		$("#continent").append("<li>" + countries.countries[country].places[place] + "</li>");
	}
	$("#continent").append("<hr>");
}


		
