const fs = require("fs"),
      Decompressor = require('./Decompressor').Decompressor;

fs.readFile("nine/input.txt", "utf8", function(err, data) {
    if(err) {return console.log(err);}

    const decompressor = new Decompressor();

    console.log(decompressor.count(data, 0, data.length));
});