var GoProTagger = require('./gopro-tagging.js');
var getFormattedTime = require('./timeUtils').getFormattedTime;
var fs = require('fs');
var util = require('util')
var exec = require('child_process').exec;
var namePath = '';
var namePathCon = '';

var child;
var videoFilePath = './GOPR8172.MP4'; //replace your video path here
var videoFileName = videoFilePath.match(/GOPR+\d{4}/g);


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
            console.log(getFormattedTime(hilights[i]));
            namePath = getFormattedTime(hilights[i]);
            namePathCon += namePath + ","; //ADDCONCATENATE;
            finalExecute = "tag -a" + namePathCon + " " + videoFilePath;

            child = exec(finalExecute, function (error) {
            console.log(namePath);
            console.log("Done!");
            if (error !== null) {
                console.log('exec error: ' + error);
                }
             });

            // fs.appendFile("./"+ videoFileName, getFormattedTime(hilights[i]) + '\n', function(err) {
            //     if(err) {
            //         return console.log(err);
            //     }

            // console.log("The file was saved!");
        // });
        }
        
    }
});