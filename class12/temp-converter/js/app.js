//Fahrenheit = Celsius * 1.8 + 32
//Celsis = (Fahrenheit - 32) / 1.8

//when user mouse over c
//hide big c
//show start with c
function startWithC() {
	$(".big-c").toggle();
	$(".start-with-c").toggle();
};

$(".big-c").mouseover(startWithC);

//when user inputs temp in c and selects enter
//show start with f
//convert temp to f from c
//with f temp converted
//with background change to hot if f>75
//with background change to cold if f<60
//with neutral background if other temp

function convertToF() {
	$(".temp-convert").css("display", "none");
	$(".big-f").css("display", "none");
	$(".start-with-f").toggle(true);
	var tempInC = $("#input-c").val();
	var tempInF = (parseInt(tempInC)*1.8 + 32);
	$("#input-f").val(tempInF);
	if(tempInF>75) {
		$("body").css("background", "url('http://uae.viclindsay.com/wp-content/uploads/2010/10/4422510792_72a06ed564_o1.jpg')");
		$("body").css("background-size", "cover");
	} else if (tempInF<60) {
		$("body").css("background", "url('https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/polar_bear_rubble_ice_MLockhart_2011.JPG')");
		$("body").css("background-size", "cover");
	} else
		$("body").css("background", "url('https://c.stocksy.com/a/hv2000/z0/11265.jpg')");
		$("body").css("background-size", "cover");
};

$("#input-c").change(convertToF);


//when user mouse over f
//hide big f
//show start with f
function startWithF() {
	$(".big-f").toggle();
	$(".start-with-f").toggle();
};

$(".big-f").mouseover(startWithF);

//when user inputs temp in f and selects enter
//show start with c
//with c temp converted
//with background change to hot if c>
//with background change to cold if c<
//with neutral background if other temp




