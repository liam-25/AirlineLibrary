var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Transportation/Major%20US%20Airlines.csv"

var airlineTypes = getColumn(url, 1);
var airlineNames = getColumn(url, 2);
var iataCodes = getColumn(url, 3);
var icaoCodes = getColumn(url, 4);
var callSigns = getColumn(url, 5);
var mainHubs = getColumn(url, 6);
var foundedYears = getColumn(url, 7);


//Find all the Airline Names according to any main hub users input
function getAirline(hub){
  var matches = [];
  for (var i in mainHubs){
    if(mainHubs[i].toLowerCase().includes(hub.toLowerCase())){
      matches.push(airlineNames[i]);
    }
  }
  if (matches.length == 0){
     matches.push("Cannot find the airline at " + hub + ".");
    }
   if (typeof hub!= "string"){
    return "Please enter a string parameter";
  }
return matches; 
}
  console.log(getAirline("wilmingtno"));

//Find main hubs based on icao code as an input
function getHub(icao){
  var matches = [];
  for (var i in icaoCodes){
    if(icaoCodes[i].toLowerCase().includes(icao.toLowerCase())){
      matches.push(airlineNames[i]);
    }
  }
  if (matches.length == 0){
      matches.push("Cannot find the airline at " + hub + ".");
    }
  else if (typeof icao!= "string"){
    return "Please enter a string parameter";
  }
return matches; 
}
  console.log(getHub("bmj"));

//Find the oldest airline based on airline type as an input
function getOldest(type){
  var oldestAirline;
  var min=2023;
  for (var i in airlineTypes){
    if (airlineTypes[i].toLowerCase().includes(type.toLowerCase())){
      if (parseFloat(foundedYears[i])<min){
        min=foundedYears[i];
        oldestAirline=airlineNames[i];
      }
    }
  }
 return oldestAirline; 
}
console.log(getOldest("Charter"));

//Find type of Airline based on callsign 
function getAirlinetype(cs){
  var type;
  for (var i in callSigns){
    if (callSigns[i].toLowerCase().includes(cs.toLowerCase())){
      type=airlineTypes[i];
    }
  }
  return type;
}
console.log(getAirlinetype("bemidji"));

//Find all airlines founded in a certain year
function getAirline2(fy){
  var matches=[];
  for (var i in foundedYears){
    if (parseFloat(foundedYears[i])==fy){
      matches.push(airlineNames[i]);
    }
  }
return matches;
}
console.log(getAirline2(1964));


function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
