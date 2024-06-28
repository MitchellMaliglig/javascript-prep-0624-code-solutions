/* exported getKeys */
function getKeys(object) {
  let arr = [];
  for (key in object) {
    arr.push(key);
  }
  return arr;
}
