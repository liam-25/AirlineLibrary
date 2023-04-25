##### returns a list of airline names from a csv file at the given main hub as a string
###### @param hub {string} - the main hub to the raw csv contents
###### @return matches {list} - the list containing the desired airline names
**` function getAirline(hub) `**

##### returns a list of main hubs from a csv file at the given icao code as a string
###### @param icao {string} - the icao code to the raw csv contents
###### @return matches {list} - the list containing the desired main hubs names
**` function getHub(icao) `**

##### returns an airline name as a string from a csv file at the given airline type as a string
###### @param type {string} - the airline type type to the raw csv contents
###### @return oldestAirline {string} - the string representing the oldest airline
**` function getOldest(type) `**

##### returns the type of airline as a string from a csv file at the given callsign as a string
###### @param cs {string} - the callsign to the raw csv contents
###### @return type {string} - the string representing the type of airline
**` function getAirlinetype(cs) `**
#

##### returns a list of airline names from a csv file at the given founded year as a value
###### @param fy {value} - the founded year to the raw csv contents
###### @return matches {list} - the list containing the desired airline names
**` function getAirline2(fy) `**
