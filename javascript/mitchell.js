require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
	const map = new Map({
		basemap: "osm"
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
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});


	//Christmas Gift
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});


	//Welcome to SLC BBB
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});


	//Dunkic
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});


	//0-8 in SLC
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});


	//Dunk Contest Champ
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});


	//Playoff Anouncement
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});


	//Miami Vices
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});


	//Miles High
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});

	//College Days
	view.graphics.add({
		symbol:{
			type:"text",
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
		}
	});
});