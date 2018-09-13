var Timepot = [];

Timepot.tick = function(label) {
	this.push({
		label: label||'',
		value: + new Date
	});
};
Timepot.tick('t0');

Timepot.getResult = function() {
	var interval = [];
	
	for (var i=0, l=this.length; i<l-1; i++) {
		interval.push( (this[i+1].label || (i+1)) +':'+ (this[i+1].value - this[i].value) );
	}

	return interval.length > 0 ?
		((this[this.length-1].value - this[0].value)/1000).toFixed(2) +'s {\n\t' + interval.join(",\n\t") +'\n}'
		: 'null';
};
Timepot.show = function(isPurge) {
	if (this.ENABLED) {
		console.log('Timing '+ Timepot.getResult());
	}

	isPurge && Timepot.purge();
};
Timepot.purge = function() {
	Timepot.length = 0;
};

Timepot.ENABLED = true;

export type Timepot;