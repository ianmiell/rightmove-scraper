//var casper = require('casper').create({
//verbose: true,
//logLevel: 'debug'
//});
var casper = require('casper').create()

casper.start('http://www.rightmove.co.uk/house-prices-in-my-area/marketTrendsTotalAvailableListingsAndNew.html?searchLocation=POSTCODE', function() {
    if (this.exists('table')) {
		this.echo('seen table')
	}
});

casper.run(function() {
    // avoid hideous error message
    var _this = this;
    _this.page.close();
    setTimeout(function exit(){
        _this.exit(exitStatus);
    }, 0);
    this.exit();
});

