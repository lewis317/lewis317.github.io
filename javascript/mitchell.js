require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
	const map = new Map({
		basemap: "streets-navigation-vector"
	});
	
	const view = new MapView({
		container: "viewDiv",
		map: map,
		zoom: 5,
		center: {
			latitude: 39.828240,
			longitude: -98.579471
		}
	});



	//Mcgee Poster
	const Mcgee = "Mitchell absolutely posterizes JaVale McGee. Too bad it won't show up on Shaqtin' a fool." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=5IMRfLLZnBA' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 40.768839,
			longitude: -111.901739
		},
		popupTemplate: {
			title: "McGee Poster",
			content: Mcgee
		}
	});


	//Christmas Gift
	const christmas = "With the NBA finally returning to Utah on Christmas day, the country watched in awe as Mitchell slammed this lob from Crowder home." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=Vox2NmmWDsg' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 40.767787,
			longitude: -111.900395
		},
		popupTemplate: {
			title: "Christmas Miracle",
			content: christmas
		}
	});


	//Welcome to SLC BBB
	const bbbslc = "The dunk heard 'round the world. With this putback, Mitchell showed the world why he would become a ROY candidate. A Ball was also involved." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=qPFy_mCKSH0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 40.768309,
			longitude: -111.901103
		},
		popupTemplate: {
			title: "Welcoming the BBB to SLC",
			content: bbbslc
		}
	});


	//Dunkic
	const dunkic = "With this dunk, Mitchell reminded Doncic, that he too was a rookie sensation." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=48Ab5jLcZdU' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 40.767712,
			longitude: -111.901990
		},
		popupTemplate: {
			title: "Dunking on Doncic",
			content: dunkic
		}
	});


	//0-8 in SLC
	const losingstreak = "Two for the price of one. With these dunks, Mitchell helped extend the king's losing streak in SLC to eight games." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=BLio_Bwkskw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 40.768900,
			longitude: -111.900288
		},
		popupTemplate: {
			title: "Long Live the Streak!",
			content: losingstreak
		}
	});


	//Dunk Contest Champ
	const champ = "The dunk contest. It was here that Mitchell truly burst onto the national stage with a a number of ferocious dunks." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=gtprpculjrQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 34.043044,
			longitude: -118.267426
		},
		popupTemplate: {
			title: "Dunk Contest Champion",
			content: champ
		}
	});


	//Playoff Anouncement
	const playoffs = "Mitchell's defining moment in a second-round series. Although the Jazz didn't win the series, this dunk helped end the season on a high note." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=SPMj1HFDPf0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 29.750732,
			longitude: -95.362058
		},
		popupTemplate: {
			title: "Playoff Putback",
			content: playoffs
		}
	});


	//Miami Vices
	const lob = "One example of the plethora of Ingles to Mitchell lobs that Jazz fans have enjoyed for the past year and a half." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=6VYGruTQ0sE' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 25.781326,
			longitude: -80.187867
		},
		popupTemplate: {
			title: "Miami Vices",
			content: lob
		}
	});


	//Miles High
	const high = "Mitchell soared miles high for this dunk against the Denver Nuggets." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=FB1X3X9qpE4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 39.749288,
			longitude: -105.007415
		},
		popupTemplate: {
			title: "Miles High",
			content: high
		}
	});

	//College Days
	const college = "A throwback to Mitchell's time at the University of Louisville, this dunk is one of his self-proclaimed favorites." + "<p><p><iframe width='560' height='315' src='https://www.youtube.com/watch?v=qRJRYeazu30' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	view.graphics.add({
		symbol: {
			type: "text",
			color: "#070428",
			text: "\ue61e",
			font: {
				size: 30,
				family: "CalciteWebCoreIcons"
			}
		},
		geometry: {
			type: "point",
			latitude: 38.257714,
			longitude: -85.753539
		},
		popupTemplate: {
			title: "Louisville",
			content: college
		}
	});
});