function calculatePi(loop) {
	var c = parseInt(loop);
	var f = parseFloat(loop);
	var n=1; pi=0;

		console.log(loop);
		if (isNaN(c) || f != c) {
			postMessage({'type':'error', 'code':'errInvalidNumber'});
			return;
		} else if (c<=0) {
			postMessage({'type':'error', 'code':'errNegativeNumber'});
			return;
		}
		for (var i=0; i<=c; i++) {
			pi=pi+(4/n)-(4/(n+2));
			n=n+4;
		}
		self.postMessage({'type':'data', "piValue": pi});
		console.log('calculation done');
};

self.onmessage = function(e) {
	calculatePi(e.data.value);
};