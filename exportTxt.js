var fs = require('fs');

		fs.writeFile("/Users/romantauler/Desktop/test/test.txt", "Hey there!", function(err) {
		    if(err) {
		        return console.log(err);
		    }

		    // console.log("The file was saved!");
		});