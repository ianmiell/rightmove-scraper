//var casper = require('casper').create({
//verbose: true,
//logLevel: 'debug'
//});
var casper = require('casper').create();
casper.start();
url='http://www.rightmove.co.uk/house-prices-in-my-area/marketTrendsTotalAvailableListingsAndNew.html?searchLocation=POSTCODE';
casper.thenOpen(url, function() {
    if (this.exists('div#trendData')) {
		text=this.getHTML('div#trendData')
		this.echo(text)
	}
});
casper.run();
