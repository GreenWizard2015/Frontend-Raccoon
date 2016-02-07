/**
 * URL: http://jsraccoon.ru/exercies-molecules 
 */

function expandGroup(str, group, repeats){
    var ret = "";
    for(var i = parseInt(repeats); i > 0; i--)
        ret += group;
    return ret;
}

function explode(formula){
	var res = {};
  var collect = function(str, el, count){
    count = count ? parseInt(count) : 1;
  	res[el] = (res[el] || 0) + count;
  };
  
  formula
    .replace(/\((.+)\)(\d+)/g, expandGroup)
    .replace(/([A-Z][a-z]?)(\d)?/g, collect);
  return res;
}

console.log(explode('H2O')); // {"H": 2, "O": 1}
console.log(explode('KMnO4')); // {"K": 1, "Mn": 1, "O": 4}
console.log(explode('Ca(OH)2')); // {"Ca": 1, "O": 2, "H": 2}
console.log(explode('K4[Fe(CN)6]')); // {"K": 4, "Fe": 1, "C": 6, "N": 6}
// Элементы могут повторяться
console.log(explode('(NH4)2HPO4')); // {"N": 2, "H": 9, "P": 1, "O": 4}
console.log(explode('FeOOH')); // {"Fe": 1, "O": 2, "H": 1}