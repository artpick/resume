// Copyright 2014-2014 Julian Sabos
// Licensed under The MIT License (MIT)
function initializeSkills(){
	
	var chart = AmCharts.makeChart("keyskills", {
	    "type": "radar",
	    "theme": "none",
	    "dataProvider": [{
	        "skillname": "HTML 5",
	        "skillpercent": 80
	    }, {
	        "skillname": "CSS 3",
	        "skillpercent": 80
	    }, {
	        "skillname": "JavasScript and JQuery",
	        "skillpercent": 80
	    }, {
	        "skillname": "Java SE-EE",
	        "skillpercent": 100
	    }, {
	        "skillname": "Hibernate 3",
	        "skillpercent": 100
	    }, {
	        "skillname": "JPA 2",
	        "skillpercent": 90
	    }, {
	        "skillname": "EJB 3",
	        "skillpercent": 50
	    }, {
	        "skillname": "Spring 3",
	        "skillpercent": 100
	    }, {
	        "skillname": "Struts (1.2.9)",
	        "skillpercent": 100
	    }, {
	        "skillname": "Spring MVC",
	        "skillpercent": 100
	    }, {
	        "skillname": "JSF (1.1, 1.2, 2)",
	        "skillpercent": 100
	    }, {
	        "skillname": "Servlet 2.2",
	        "skillpercent": 100
	    }, {
	        "skillname": "CXF Web Services",
	        "skillpercent": 70
	    }, {
	        "skillname": "Primefaces (3.5, 4)",
	        "skillpercent": 100
	    }, {
	        "skillname": "GlassFish",
	        "skillpercent": 80
	    }, {
	        "skillname": "WebSphere",
	        "skillpercent": 80
	    }, {
	        "skillname": "Apache Tomcat",
	        "skillpercent": 100
	    }, {
	        "skillname": "JBoss AS7",
	        "skillpercent": 80
	    }, {
	        "skillname": "Eclipse Dev and  API",
	        "skillpercent": 100
	    }, {
	        "skillname": "PostgresSQL",
	        "skillpercent": 70
	    }, {
	        "skillname": "Oracle",
	        "skillpercent": 30
	    }, {
	        "skillname": "Hudson, Jenkins",
	        "skillpercent": 100
	    }, {
	        "skillname": "Ant, Maven",
	        "skillpercent": 100
	    }, {
	        "skillname": "CVS, SVN, GIT",
	        "skillpercent": 100
	    },  {
	        "skillname": "SonarQube (PMD, Checkstyle)",
	        "skillpercent": 90
	    }, {
	        "skillname": "Selenium IDE",
	        "skillpercent": 100
	    }],
	    "colors" : ["#5cb85c"],
	    "valueAxes": [{
	        "axisTitleOffset": 20,
	        "minimum": 0,
	        "maximum": 100,
	        "axisAlpha": 0.15,
	        "fillColor" : "#357ebd",
	        "fillAlpha" : "0.05"
	    }],
	    "startDuration": 0,
	    "graphs": [{
	        "balloonText": "[[category]] : <b>[[value]] %</b>",
	        "bullet": "round",
	        "valueField": "skillpercent",
	        "legendValueText" : "APPPPPPPPPPPPPp"
	    }],
	    "categoryField": "skillname",
	    "exportConfig": {
	        "menuTop":"10px",
	        "menuRight":"10px",
	        "menuItems": [{
	            "icon": '/lib/3/images/exportskills.png',
	            "format": 'png'
	        }]
	    }
	});
	
}

// Initilize Xmap vars
var geocoder;
var map1;

// Casablanda LatLng
var casablanca =  L.latLng(33.578456, -7.606636);

// Pessac LatLng
var pessac =  L.latLng(44.8066666667, 0.631111111111);

// Tampa LatLng
var tampa =  L.latLng(27.970833, -82.464722);

// ================= French translation ===============
var pessacDescriptionContentFR = '<div class="marker_info_style">'
		+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE SOFTWARE Bordeaux <hr /></h6>'
		+ '<p>Employ&eacute; quatre ans &agrave; <strong>BLU AGE SOFTWARE Bordeaux</strong> comme contributeur principal au logiciel Blu Age Forward.</p>'
		+ '</div>';
var tampaDescriptionContentFR = '<div  class="marker_info_style">'
		+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE CORPORATION Tampa <hr /></h6>'
		+ '<p>Aujourd\'hui &agrave; <strong>BLU AGE CORPORATION Tampa</strong> pour ouvrir une nouvelle agence bas&eacute; sur le partenariat entre <strong>Accenture</strong> &bsol; <strong>BLU AGE</strong>.</p>'
		+ '</div>';
var casablancaDescriptionContentFR = '<div class="marker_info_style">'
		+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE SOFTWARE Casablanca <hr /></h6>'
		+ '<p>En mission durant neuf mois au total &agrave; <strong>BLU AGE SOFTWARE Casablanca</strong> en tant que d&eacute;veloppeur de composant de g&eacute;n&eacute;ration et chef de projet offshore.</p>'
		+ '</div>';

//================= English translation ===============
var pessacDescriptionContent = '<div class="marker_info_style">'
	+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE SOFTWARE Bordeaux <hr /></h6>'
	+ '<p>Worked for four years in <strong>BLU AGE SOFTWARE Bordeaux</strong> as main contributor on the <strong>Blu Age Forward</strong> product.</p>'
	+ '</div>';
var tampaDescriptionContent = '<div  class="marker_info_style">'
	+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE CORPORATION Tampa <hr /></h6>'
	+ '<p>Now in <strong>BLU AGE CORPORATION Tampa</strong> to open a new branch based on the <strong>Accenture</strong> &bsol; <strong>BLU AGE</strong> premium partnership.</p>'
	+ '</div>';
var casablancaDescriptionContent = '<div class="marker_info_style">'
	+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE SOFTWARE Casablanca <hr /></h6>'
	+ '<p>Worked for 9 months in <strong>BLU AGE SOFTWARE Casablanca</strong> as component developper, offshore team manager.</p>'
	+ '</div>';

//================= Spanish translation ===============
var pessacDescriptionContentES = '<div class="marker_info_style">'
	+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE SOFTWARE Bordeaux <hr /></h6>'
	+ '<p>Trabaje quatro a�os a <strong>BLU AGE SOFTWARE Bordeaux</strong> como principal colaborador al desarrollo del sofware <strong>Blu Age Forward</strong>.</p>'
	+ '</div>';
var tampaDescriptionContentES = '<div  class="marker_info_style">'
	+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE CORPORATION Tampa <hr /></h6>'
	+ '<p>Estoy ahora a <strong>BLU AGE CORPORATION Tampa</strong> para abrir una agencia radicado en la colaboracion entre <strong>Accenture</strong> &bsol; <strong>BLU AGE</strong>.</p>'
	+ '</div>';
var casablancaDescriptionContentES = '<div class="marker_info_style">'
	+ '<h6><span class="glyphicon glyphicon-pushpin"></span> BLU AGE SOFTWARE Casablanca <hr /></h6>'
	+ '<p>Trabaje nueve meses en <strong>BLU AGE SOFTWARE Casablanca</strong> como programador de componentos de generaci&oacute;n y como encargado de equipo offshore.</p>'
	+ '</div>';
// Initialise all the locations.
function initializeMaps(lang) {

	//  
	var pessacDesc = "";
	var casablancaDesc = "";
	var tampaDesc = "";

	// Initialize the language
	if(lang =="FR"){
		pessacDesc = pessacDescriptionContentFR;
		casablancaDesc = casablancaDescriptionContentFR;
		tampaDesc = tampaDescriptionContentFR;
	} else if(lang == "ES"){
		pessacDesc = pessacDescriptionContentES;
		casablancaDesc = casablancaDescriptionContentES;
		tampaDesc = tampaDescriptionContentES;
	}else {
		pessacDesc = pessacDescriptionContent;
		casablancaDesc = casablancaDescriptionContent;
		tampaDesc = tampaDescriptionContent;
	}
	
	/*var myOptions = {
		center : new google.maps.LatLng(40, -25),
		zoom : 2,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		disableDefaultUI : true,
		scrollwheel : false
	// , draggable : false
	};*/

	// Initialize the map.
	var map1 = L.map('map-top1',{center: [40, -25], zoom:2});

	/*map1 = new google.maps.Map(document.getElementById("map-top1"),
			myOptions);
*/
	// Create Casablanca Marker
	var casablancaMarker = L.marker(casablanca,{
		title : "Casablanca"
	});

	// Create Pessac Marker
	var pessacMarker = L.marker(pessac,{
		title : "Pessac"
	});

	// Create Tampa Marker
	var tampaMarker = L.marker(tampa,{
		title : "Tampa"
	});

	// Init info windows.
	var pessacInfoWindow = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent(pessacDesc);

	var casablancaInfoWindow = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent(casablancaDesc);
	var tampaInfoWindow = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent(tampaDesc);

	// Set the marker to the map.
	casablancaMarker.bindPopup(casablancaInfoWindow).addTo(map1);
	pessacMarker.bindPopup(pessacInfoWindow).addTo(map1);
	tampaMarker.bindPopup(tampaInfoWindow).addTo(map1);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 2,
		id: 'mapbox.streets'
	}).addTo(map1);
}