// Simple Set Algorithms

// Intersection
Array.prototype.intersection = function(a) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
      if (a.indexOf(this[i]) != -1) {
          result.push(this[i]);
      }
  }
  return result;
}

// Differece
Array.prototype.difference = function(a) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
      if (a.indexOf(this[i]) === -1) {
          result.push(this[i]);
      }
  }
  return result;
}
// Union
Array.prototype.union = function(a) {
  var result = this.difference(a);
  for (var i = 0; i < a.length; i++) {
    result.push(a[i]);
  }
  return result;
}
// Symmetric Difference
Array.prototype.symmetric_difference = function(a) {
  return this.difference(a).union(a.difference(this));
}

// Unique Array
Array.prototype.unique = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if(this.indexOf(this[i], i+1) === -1) {
      result.push(this[i]);
    }
  }
  return result;
}
