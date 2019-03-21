var travels = [	
		{
		position: {
			lat: 50.0755,
			lng: 14.4378
		},
		country: 'Prague',
		year: '2008',
		season: 'Spring',
		continent: 'Europe'

	},


	{
		position: {
			lat: 48.6690,
			lng: 19.6990
		},
		country: 'Slovakia',
		year: '2008',
		season: 'Spring',
		continent: 'Europe'
	},

	{
		position: {
			lat: 47.1625,
			lng: 19.5033
		},
		country: 'Hungry',
		year: '2008',
		season: 'Spring',
		continent: 'Europe'
	},

	{
		position: {
			lat: 14.0583,
			lng: 108.2772
		},
		country: 'Vietnam',
		year: '2008',
		season: 'Fall',
		continent: 'Asia'


	},

	{
		position: {
			lat: 19.8563,
			lng: 102.4955
		},
		country: 'Laos',
		year: '2008',
		season: 'Fall',
		continent: 'Asia'
	},
	{
		position: {
			lat: 13.4125,
			lng: 103.8670
		},
		country: 'Cambodia',
		year: '2008',
		season: 'Fall',
		continent: 'Asia'
	},
	{
		position: {
			lat: -22.9576,
			lng: 18.4904
		},
		country: 'Namibia',
		year: '2009',
		season: 'Fall',
		continent: 'Africa'
	},
	{
		position: {
			lat: -22.3285,
			lng: 24.6849
		},
		country: 'Botswana',
		year: '2009',
		season: 'Fall',
		continent: 'Africa'
	},
	{
		position: {
			lat: -13.1339,
			lng: 27.8493
		},
		country: 'Zambia',
		year: '2009',
		season: 'Fall',
		continent: 'Africa'
	},
	{
		position: {
			lat: 27.5142,
			lng: 90.4336
		},
		country: 'Buthan',
		year: '2009',
		season: 'Winter',
		continent: 'Asia'
	},
	{
		position: {
			lat: 20.5937,
			lng: 78.9629
		},
		country: 'India',
		year: '2009',
		season: 'Winter',
		continent: 'Asia'
	},
	{
		position: {
			lat: 28.3949,
			lng: 84.1240
		},
		country: 'Nepal',
		year: '2009',
		season: 'Winter',
		continent: 'Asia'
	}


];
/*
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
			
];*/
            //Can I use this instead of a database??
			


	//$("#travel").append("<b>" + travels.travels[0].year + "</b> <br>");
	//$("#travel").append(travels.travels[0].season + "<br>");
	//$("#travel").append("<li>" + travels.travels[0].country + "</li>");

function myFunction(travels) {
	var input = document.getElementById("myInput").value;
	var filteredTravels = [];
	var inputUpperCase = input.toUpperCase();

	for (i= 0;  i < travels.length; i++) {
		
	//var place ="string";
	//year is the same
	if (travels[i].year.indexOf(input) > -1 || travels[i].continent.toUpperCase().indexOf(inputUpperCase) > -1 || travels[i].country.toUpperCase().indexOf(inputUpperCase) > -1) {
//	if (input == travels[i].year || input.toUpperCase() == travels[i].continent.toUpperCase()){
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

      var map;





	  
function initMap() {
  var myLatLng = {lat: 0, lng: 0};
  

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: myLatLng
  });

markers(map, travels);
}




	  function markers (map, travels){
 var myLatLng;
	var bounds = new google.maps.LatLngBounds();
 
	for (i= 0;  i < travels.length; i++){
		console.log("in loop " + travels[i].position.lat);
  myLatLng = {lat: travels[i].position.lat, lng: travels[i].position.lng};
  	bounds.extend(myLatLng);
  console.log(myLatLng);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
}


























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


