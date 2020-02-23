
exports.min = function min (array) {
	if(array === undefined || array.length == 0){
		return 0;
	} else return Math.min.apply(Math, array);
}

exports.max = function max (array) {
  if(array === undefined || array.length == 0){
		return 0;
	} else return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
  if(array === undefined || array.length == 0){
		return 0;
	} else
    {
		let res = array.reduce(function(sum, ind) {
      		return (sum + ind);
}, 0);
  return (res/array.length);
	}
}
