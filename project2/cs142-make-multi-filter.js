function cs142MakeMultiFilter(originalArray) {
  let currentArray=originalArray;
  function arrayFilter(filterCriteria, callback) {
    if(typeof(filterCriteria)!=='function') {
      if(typeof(callback)==='function') {
        callback.call(originalArray);
      }
      return currentArray;
    }
    currentArray=currentArray.filter(filterCriteria);
    if(typeof(callback)==='function') {
      callback.call(originalArray);
    }
    return arrayFilter;
  }
  return arrayFilter;
}