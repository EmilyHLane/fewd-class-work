//alert("javascript is working");
//sf
/*
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.774929, lng: -122.419416},
		zoom: 9
	});
}*/

//ice cream markers
//center sf
function initMap() {
	var myLoc = {lat: 37.774929, lng: -122.419416};
	var map = new google.maps.Map(document.getElementById("map"), {zoom: 13, center: myLoc});
	var iceCream = [
	{
		lat: 37.800621,
		lng: -122.438711,
		title: 'test Over the Moon Creamery Marina',
	},
	{
		lat: 37.794717,
		lng: -122.395305,
		title: 'Over the Moon, Embarcadero',
	},
	{
		lat: 37.798120, 
		lng: -122.407293,
		title: 'The Baked Bear, North Beach',
	},
	{
		lat: 37.803821, 
		lng: -122.440365,
		title: 'Smitten, Marina',
	},
	{
		lat: 37.776632,
		lng: -122.426166,
		title: 'Salt & Straw, Hayes Valley',
	},
	{
		lat: 37.790240,
		lng: -122.434169,
		title: 'Salt & Straw, Fillmore',
	},
	{
		lat: 37.758095,
		lng: -122.388179,
		title: 'Mr. and Mrs. Miscellaneous',
	},
	{
		lat:37.779936, 
		lng: -122.425096,
		title: 'Smitten, Hayes Valley',
	},
	{
		lat: 37.789870, 
		lng: -122.434203,
		title: 'Smitten, Fillmore',
	},
	{
		lat: 37.761445, 
		lng: -122.420870,
		title: 'Smitten, Mission',
	},
	{
		lat: 37.752959,
		lng: -122.412153,
		title: 'Humphry Slocombe, Mission',
	},
	{
		lat: 37.795695,
		lng: -122.393695,
		title: 'Humphry Slocombe, Embarcadero',
	},
	{
		lat: 37.768958,
		lng: -122.467954,
		title: 'Twirl & Dip Soft Serve',
	},
	{
		lat: 37.761598,
		lng: -122.425682,
		title: 'Bi-Rite Creamery, Mission',
	},
	{
		lat: 37.774830,
		lng: -122.437462,
		title: 'Bi-Rite Creamery, NOPA',
	},
	{
		lat: 37.762382,
		lng: -122.465964,
		title: 'Holy Gelato',
	},
	{
		lat: 37.788466,
		lng: -122.402044,
		title: 'Ghirardelli Ice Cream and Chocolate Shop',
	}
	];	

	iceCream.forEach(mapIceCream);
	
	function mapIceCream(iceCream) {

		var marker = new google.maps.Marker({
			position: {
				lat: iceCream.lat,
				lng: iceCream.lng,
			},
			title: iceCream.title,
			map: map,
		});
	};
}


