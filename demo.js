

var GoProTagger = require('./gopro-tagging.js');
var videoFilePath = './GOPR8172.MP4'; //replace your video path here
var getFormattedTime = require('./timeUtils').getFormattedTime;

GoProTagger.getTag(videoFilePath, function(hilights, err){
    if (err != undefined)
    {
        console.log('GoPro-Tagging: Error - ', err);
    } 
    else
    {
        console.log('This video has ' + hilights.length + ' HiLight tag(s)');

        for(var i = 0, end = hilights.length; i < end; i++) {
            console.log(getFormattedTime(hilights[i])) ;
        }
    }
});