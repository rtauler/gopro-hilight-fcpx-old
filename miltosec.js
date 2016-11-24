
var separator = ':'

function milToMin (mil){
	return (mil/1000/60) << 0;
}

function milToSec (mil){
	return (mil/1000) % 60;
}

function getFormattedTime(mil){
	return milToMin(mil)+separator+milToSec(mil); 
}

exports.getFormattedTime = getFormattedTime;