# Project Assets
Useful things I've implemented thus far.

## Charting Library
To create my initial graphs from imported data, I used [Google Charts Library](https://developers.google.com/chart/) and uploaded the information through Google Sheets. I made this decision due to the high volume of data points as it would be easier to read in this format than a txt file. The data show is for: 
* [Renewable energy production in Florida](https://www.eia.gov/opendata/qb.php?sdid=SEDS.REPRB.FL.A) and 
* [Electricity total consumption (i.e. sold) Florida](https://www.eia.gov/opendata/qb.php?sdid=SEDS.ESTCB.FL.A).

Both charts are displayed as line graphs since the data occurs over time. Other options could be a timeline or scatterplot. However, I ultimately went with a line graph to better show change over time. 

The current version pulls directly from its API source. This is a simpler and more manageable method as it will keep itself current since it is pulling the EIA database. The API call works by making a request and then reading the parsing through and formatting the data into the chosen chart form.
