
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
	
/*
Trying to: when user clicks marker, make that ice cream place #1 in the list and give it the styling for #1

//do this for each ice cream marker
iceCream.forEach(function (){  
//when click marker run some funcion
		marker.addListener('click', function() {

            //get iceCream.title and save to var
			var iceCreamTitle = icecream.title;	
			var iceCreamHtml = $('p .ice-cream-name').html();

            //if icecream.title matches html from p .ice-cream-name
            //then remove current class, add class .ice-cream-1
			if(iceCreamTitle === iceCreamHtml) {
				 //get the article that has the class name of the match;
				 //something.removeClass();
				 //something.addClass('.ice-cream-1');
				 //push to top of list;
			} else if (iceCreamTitle !== iceCreamHtml) and (//class is not 'ice-cream-1'){
				//change class to '.ice-cream-n';
			} else {
				//do nothing;
			}
}
	});  
	
	*/
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



