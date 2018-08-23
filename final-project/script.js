
var infoWindow;
function initMap() {
//geoloc
infoWindow = new google.maps.InfoWindow;
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};

		infoWindow.setPosition(pos);
		infoWindow.setContent('you are here.');
		infoWindow.open(map);
		map.setCenter(pos);
	}, function() {
		handleLocationError(true, infoWindow, map.getCenter());
	});
} else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
      }	

//ice cream markers
var myLoc = {lat: 37.774929, lng: -122.419416};
var map = new google.maps.Map(document.getElementById("map"), {zoom: 13, center: myLoc,  disableDefaultUI: true});
var iceCream = [
{
	lat: 37.800621,
	lng: -122.438711,
	title: 'Over the Moon Creamery, Marina',
	id: '#moon-marina',
},
{
	lat: 37.794717,
	lng: -122.395305,
	title: 'Over the Moon, Embarcadero',
	id: '#moon-embarcadero',
},
{
	lat: 37.798120, 
	lng: -122.407293,
	title: 'The Baked Bear, North Beach',
	id: '#bear',
},

{
	lat: 37.758095,
	lng: -122.388179,
	title: 'Mr. and Mrs. Miscellaneous',
	id: '#mrmrs',
},

{
	lat: 37.776632,
	lng: -122.426166,
	title: 'Salt & Straw, Hayes Valley',
	id: '#salt-hayes',
},

{
	lat: 37.790240,
	lng: -122.434169,
	title: 'Salt & Straw, Fillmore',
	id: '#salt-fillmore',
},

{
	lat:37.779936, 
	lng: -122.425096,
	title: 'Smitten, Hayes Valley',
	id: '#smitten-hayes',
},
{
	lat: 37.789870, 
	lng: -122.434203,
	title: 'Smitten, Fillmore',
	id: '#smitten-fillmore',
},

{
	lat: 37.803821, 
	lng: -122.440365,
	title: 'Smitten, Marina',
	id: '#smitten-marina',
},

{
	lat: 37.761445, 
	lng: -122.420870,
	title: 'Smitten, Mission',
	id: '#smitten-mission',
},

{
	lat: 37.752959,
	lng: -122.412153,
	title: 'Humphry Slocombe, Mission',
	id: '#humphry-mission',
},
{
	lat: 37.795695,
	lng: -122.393695,
	title: 'Humphry Slocombe, Embarcadero',
	id: '#humphry-embarcadero',
},
{
	lat: 37.768958,
	lng: -122.467954,
	title: 'Twirl & Dip Soft Serve',
	id: '#twirl',
},
{
	lat: 37.761598,
	lng: -122.425682,
	title: 'Bi-Rite Creamery, Mission',
	id: '#bi-mission',
},
{
	lat: 37.774830,
	lng: -122.437462,
	title: 'Bi-Rite Creamery, NOPA',
	id: '#bi-nopa',
},
{
	lat: 37.762382,
	lng: -122.465964,
	title: 'Holy Gelato',
	id: '#holy',
},
{
	lat: 37.788466,
	lng: -122.402044,
	title: 'Ghirardelli Ice Cream and Chocolate Shop',
	id: '#gdelli',
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
	marker.addListener('click', function() {
		var iceId = iceCream.id;
		$('article').attr('class', 'ice-cream-n');
		$(iceId).attr('class', 'ice-cream-1');
});

};
}

//geoloc error
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
};



