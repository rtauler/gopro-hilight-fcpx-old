

var GoProTagger = require('./gopro-tagging.js');
var videoFilePath = './GOPR8172.MP4'; //replace your video path here
// var getFormattedTime = require('./miltosec');


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


GoProTagger.getTag(videoFilePath, function(hilights, err){
    if (err != undefined)
    {
        console.log('GoPro-Tagging: Error - ', err);
    } 
    else
    {
        console.log('This video has ' + hilights.length + ' HiLight tag(s)');
        for(var i = 0;i < hilights.length;i++) {
            // console.log('HiLight ' + i + ' @ ' + hilights[i] + ' millisecond');
            console.log(getFormattedTime(hilights[i])) ;
        }
    }
});