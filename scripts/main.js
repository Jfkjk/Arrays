const  gotCitiesCSV= "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
console.log(gotCitiesCSV);
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
console.log( bestThing);
const got = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
var gotsplit=got.split(',');
console.log(gotsplit.join(";"));
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
console.log(lotrCitiesArray.join(","));
const lot = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
lot.splice(0,3);
console.log(lot);
const lot2 = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
lot2.splice(2,1);
console.log(lot2);
 var bestslice = bestThing.slice(23,38);
 console.log(bestslice);
 var thingslice=bestThing.slice(64,69);
 console.log(thingslice);
 var gotC = gotCitiesCSV.split(',')
 
