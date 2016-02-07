var casper = require('casper').create({
verbose: true,
logLevel: 'debug'
});
//var casper = require('casper').create();


//casper.on('resource.requested', function(resource) {
//    for (var obj in resource.headers) {
//        var name = resource.headers[obj].name;
//        var value = resource.headers[obj].value;
//        if (name == "User-Agent"){
//            this.echo(value);
//        }
//    }
//});

//casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');
casper.start();
//url='http://google.com';
url='http://www.rightmove.co.uk/house-prices-in-my-area/marketTrendsTotalAvailableListingsAndNew.html?searchLocation=POSTCODE';
casper.thenOpen(url, function() {
	this.echo('asd')
    if (this.exists('table')) {
		this.echo('seen table')
	}
});

casper.run();
//casper.run(function() {
//    // avoid hideous error message
//    var _this = this;
//    _this.page.close();
//    setTimeout(function exit(){
//        _this.exit(exitStatus);
//    }, 0);
//    this.exit();
//});

